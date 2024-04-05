import Search from "@/app/validators/Table/Search/Search";
import List from "@/app/validators/Table/List/List";

type Callback = {
    active: boolean;
    search: string;
    onActive: () => void;
    onInactive: () => void;
    onType: (text: string) => void;
};

export default function Table({search, onType, active, onActive, onInactive}: Callback) {

    return (
        <section>
            <Search search={search} onType={onType}/>
            <List search={search} active={active} onActive={onActive} onInactive={onInactive}/>
        </section>
    )
}