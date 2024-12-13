import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [post, setPost] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(post => setPost(post))
  })

  return (
    <>
      <div className="container shadow rounded bg-light mt-5 p-5">
        <h1>Api Fetch</h1><hr />
        {
          post.length > 0?
          post.map((post) =>
            <div className="card p-4 my-3">
              <h1>{post.id} {post.title}</h1>
              <p> {post.body}</p>
            </div>
          )
          :
          <div>
            <h1 className="test-center">Loading...</h1>
          </div>
        }
        <div className=" d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            <li className="page-item"><a class="page-link" href="#">Previous</a></li>
            <li className="page-item"><a class="page-link" href="#">1</a></li>
            <li className="page-item"><a class="page-link" href="#">2</a></li>
            <li className="page-item"><a class="page-link" href="#">3</a></li>
            <li className="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
      </div>
      
    </>
  )
}

export default App
