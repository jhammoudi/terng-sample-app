import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
        id
        title
        author
        year
    }
  }
`;

const Books = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Something went wrong!</h1>

    return (
        <div>
            <div className="books">
                {data.books.map(({ id, title, author, year }: any) => (
                    <div key={id} className="book">
                        <p>{`${title} - ${author}`}</p>
                        {year && <p>{year}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Books