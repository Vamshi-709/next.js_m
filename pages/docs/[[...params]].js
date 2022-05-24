import { useRouter } from 'next/router'

function Doc() {
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params);

    if (params.length === 2) {
        return <h2>Viewing docs for featuring {params[0]} and concept {params[1]}</h2>
    } else if (params.length === 1) {
       return <h2> for viewing feture docs {params[0]}</h2>
    }
    return (
        <div>Doc Home Page</div>
    )
}

export default Doc