import {
    Button,
    Collapse,
    Form,
    Nav, Navbar,
    NavbarText,
    NavbarToggler, NavItem
} from "reactstrap";
import {useEffect, useState} from "react";
import ApiSourceFilter from "../Filters/ApiSourceFilter.jsx";
import SourceFilter from "../Filters/SourceFilter.jsx";
import CategoryFilter from "../Filters/CategoryFilter.jsx";
import AuthorFilter from "../Filters/AuthorFilter.jsx";
import {useAuthContextProvider} from "../../contexts/AuthContextProvider.jsx";
import {useFiltersContextProvider} from "../../contexts/FiltersContextProvider.jsx";
import SearchBar from "../SearchBar.jsx";
import DateFilter from "../Filters/DateFilter.jsx";

function Filters() {
    const {user} = useAuthContextProvider()
    const {setFilters} = useFiltersContextProvider()

    const [isOpen, setIsOpen] = useState(false);
    const [api, setApi] = useState([]);
    const [source, setSource] = useState([]);
    const [category, setCategory] = useState([]);
    const [author, setAuthor] = useState([]);
    const [search, setSearch] = useState("");
    const [dateFrom, setDateFrom] = useState();
    const [dateTo, setDateTo] = useState();
    const toggle = () => setIsOpen(!isOpen);

    const _setFilters = () => {
        const filters = {
            dateFrom: dateFrom,
            dateTo: dateTo,
            search: search,
            api: api,
            source: source,
            category: category,
            author: author,
        }
        setFilters(filters);
    }

    useEffect(() => {
        _setFilters()
    }, [search])

    const onSubmit = (event) => {
        event.preventDefault()
        _setFilters()
    }

    return (
        <div className={'mt-5'}>
            <h5>Search</h5>
            <SearchBar setSearch={setSearch}/>
            <h5>Filters</h5>
            {
                !!Object.keys(user).length &&
                <Form className={''} onSubmit={ev => onSubmit(ev)}>
                    <Navbar
                        expand={'lg'}
                        container={'fluid'}
                    >
                        <NavbarToggler className={'vw-100'} onClick={toggle}/>
                        <Collapse id={"filer-nav-bar"} isOpen={isOpen} navbar>
                            <Nav className="me-auto" navbar>
                                <NavItem>
                                    <ApiSourceFilter
                                        setApi={setApi} defaultValue={user.api_sources}
                                    />
                                </NavItem>
                                <NavItem>
                                    <SourceFilter
                                        setSource={setSource} defaultValue={user.sources}
                                    />
                                </NavItem>
                                <NavItem>
                                    <CategoryFilter
                                        setCategory={setCategory} defaultValue={user.categories}
                                    />
                                </NavItem>
                                <NavItem>
                                    <AuthorFilter
                                        setAuthor={setAuthor} defaultValue={user.authors}
                                    />
                                </NavItem>
                                <NavItem>
                                    <DateFilter
                                        dateFrom={dateFrom}
                                        dateTo={dateTo}
                                        setDateFrom={setDateFrom}
                                        setDateTo={setDateTo}
                                    />
                                </NavItem>
                            </Nav>
                            <NavbarText>
                                <Button type={'submit'} className={'btn'}>
                                    Filter
                                </Button>
                            </NavbarText>
                        </Collapse>
                    </Navbar>
                </Form>
            }
        </div>
    )
}

export default Filters
