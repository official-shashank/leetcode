import { HStack } from "@chakra-ui/react"
import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
} from "@/components/ui/pagination"

const Pegination = () => {
    return (
        <PaginationRoot count={20} pageSize={2} defaultPage={1} variant="solid">
            <HStack>
                <PaginationPrevTrigger />
                <PaginationItems />
                <PaginationNextTrigger />
            </HStack>
        </PaginationRoot>
    )
}
export default Pegination