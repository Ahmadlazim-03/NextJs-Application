import { useRouter } from "next/router";

const HomePage = () => {
    const { query } = useRouter();
    console.log(query);
    return (
        <div>
            <div>Product : {query.id} </div>
        </div>
    );
}

export default HomePage;