import React from 'react'
import Navbar from '../components_lite/Navbar'


import veridia from './Screenshot 2025-12-17 165135.png'

const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img src={veridia} alt="Company" className="h-80 object-cover rounded-lg shadow-md" />
          </div>
          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit optio id necessitatibus voluptate aut rem impedit vel autem ipsam doloribus ullam, laborum nemo aliquid natus ad nam quae veniam quibusdam.</h2>
            <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus, quisquam assumenda dolorem dolore commodi doloribus ullam exercitationem eveniet atque quaerat distinctio, nesciunt magni officiis eum temporibus molestias corporis incidunt.</p>
            <p className="text-gray-600 mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque officia, sequi similique distinctio deleniti nostrum voluptatum soluta harum perferendis facilis nulla ullam veniam quis dolore numquam vero quo ducimus!</p>
            <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam qui, nostrum illum veniam asperiores reprehenderit ab? Earum vitae enim et aut perferendis, modi architecto ratione repellat explicabo doloremque laborum?</p>
            <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga error voluptatum minima voluptatem nesciunt, dolor laborum sapiente suscipit aut sint dolorum! Dolorum, ipsa officia soluta vero eum veritatis exercitationem ipsum.</p>
          </div>
        </div>
      </div>
      
      <hr className="w-full border-gray-300 my-6" />
      
     
    </div>
  )
}

export default Creator
