function PropData({User}){
    console.log(User)
    return(
        <>
        <h1>This Is ProData Component</h1>
        <h2>Name : {User.Name}</h2>
       <h2>Age : {User.age}</h2>
        <h2>Email : {User.Email}</h2>
        </>
    )
}
export default PropData;