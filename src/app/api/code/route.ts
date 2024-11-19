import { NextResponse } from "next/server";
import { performance } from "perf_hooks";
import vm from "vm";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { code, language } = body;

    if (!code || !language) {
      return NextResponse.json(
        { error: "Both 'code' and 'language' are required" },
        { status: 400 }
      );
    }

    if (language !== "javascript") {
      return NextResponse.json(
        { error: "Only JavaScript language is supported currently" },
        { status: 400 }
      );
    }

    // Sandbox to capture console output
    let consoleOutput: string[] = [];
    const sandbox: Record<string, any> = {
      console: {
        log: (...args: any[]) => {
          consoleOutput.push(args.map(String).join(" "));
        },
      },
    };

    // Prepare and run the script
    const script = new vm.Script(code);
    const context = vm.createContext(sandbox);

    const startTime = performance.now();
    try {
      script.runInContext(context);
    } catch (executionError:any) {
      return NextResponse.json(
        { error: `Execution Error: ${executionError.message}` },
        { status: 400 }
      );
    }
    const endTime = performance.now();

    const executionTime = endTime - startTime;

    // If no console output and no return value, indicate no output
    const output =
      consoleOutput.length > 0
        ? consoleOutput.join("\n")
        : "No output produced (check your code logic)";

    return NextResponse.json({
      output,
      executionTime: `${executionTime.toFixed(2)} ms`,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
