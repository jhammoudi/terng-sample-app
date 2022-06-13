import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
        id
        login
        avatar_url
    }
  }
`;

const Users = () => {
    const { loading, error, data } = useQuery(GET_USERS)

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Something went wrong!</h1>

    return (
        <div>
            <div className="users">
                {data.users.map(({ id, login, avatar_url }: any) => (
                    <div key={id} className="user">
                        <div className="user--avatar">
                            <img alt="avatar" height="150" src={avatar_url} />
                        </div>
                        <a className="user--name" target="_blank" rel="noopener noreferrer" href={`https://github.com/${login}`}>
                            @{login}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users