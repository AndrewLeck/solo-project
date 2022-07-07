function Feedback(){
    return(
        <>
            <h1>Want us to add anything? Give us your suggestion down below.</h1>
                <form>
                    <div>
                        <input type="text" placeholder="Email" />
                    </div>
                        <header>Message:</header>
                            <p>
                                {/* will have to expand this imput box to make it bigger */}
                                <input tpye="text" placeholder="Users will be able to type messages Here!" />
                            </p>
                </form>
        </>
    )
}

export default Feedback;
