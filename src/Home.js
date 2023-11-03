import BlogList from "./Bloglist";
import useFetch from "./useFetch";
const Home = () => {
  const{data:blogs,isPending,error}=useFetch("http://localhost:5000/home");
  return (
    <div className="home">
        <h1>All Blogs</h1>
        {error && <div> {error} </div>}
        {isPending && <div> Loading . . . . . </div>}    
        {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;