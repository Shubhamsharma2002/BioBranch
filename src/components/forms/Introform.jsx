import React from 'react'

const  Introform = ()=> {
  return (
    <div>
                  <form action="" className="inline-flex items-center shadow-lg">
            <span className="bg-white py-4 pl-4">bioserach.to/</span>
            <input
              type="text"
              className="py-4 focus:outline-none  focus:ring-2 rounded focus:ring-blue-500"
              placeholder="username"
            />

            <button type="submit" className="bg-blue-500 text-white py-4 px-6">
              join For free
            </button>
          </form>
    </div>
  )
}

export default Introform