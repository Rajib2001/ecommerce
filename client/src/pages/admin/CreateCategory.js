import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios'
import toast from 'react-hot-toast'
import CategoryForm from '../../components/Form/CategoryForm'
import{ Modal } from "antd"

const CreateCategory = () => {

  const [categories, setCategories] = useState([])
  const[name,setName]=useState("")
  const[vissible,setVissible]=useState(false);
  const[seleceted,setSelected]=useState(null)
  const[updatedName,setUpdatedName]=useState("")


  const handlerSubmit=async(e)=>{
    e.preventDefault()
    try {
      const{data}=await axios.post("http://localhost:8080/api/v1/category/create-category",{name})
      if(data?.success){
        toast.success(`${name} is created.`)
        getAllCategory();
      }else{
        toast.error(data.message)
      }

      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong in creating product")
      
    }

  }
  const getAllCategory = async () => {
    try {

      const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
      if (data.success) {
        setCategories(data.category);

      }





    } catch (error) {
      console.log(error)
      toast.error("Something went wrong..!!")
    }

  };
  useEffect(() => {
    getAllCategory()

  }, [])

  const handlerUpdated=async(e)=>{
    e.preventDefault()
    try {
      const{data}=await axios.put(`http://localhost:8080/api/v1/category/update-category/${seleceted._id}`,{name:updatedName})
      if(data?.success){

        toast.success(`${updatedName} is updated.`)
        setSelected(null)
        setUpdatedName("")
        setVissible(false)
        getAllCategory();
      }
      else{
        toast.error(data.message)
      }
    } catch ({error}) {
      console.log(error)
      toast.error("Something went wrong !!")
      
    }


  }

  const handlerDelete=async(pId)=>{

    try {

      const{data}=await axios.delete(`http://localhost:8080/api/v1/category/delete-category/${pId}`,{name})
      if(data?.success){
        toast.success(`Category is deleted`)
        getAllCategory()
      }else{
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
      
      
    }

  }


  return (
    <Layout title={"Dashboard-Create Category"}>
      <div className="container-fluid m-3 p-3">

        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Manage Category</h1>
            <div className='p-3 w-50'>

          <CategoryForm handlerSubmit={handlerSubmit}value={name}setValue={setName}/>
            </div>
            <div className='w-75'>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>


                  {categories?.map(c => (
                    <>
                      <tr>

                        <td key={c._id}>{c.name}</td>
                        <td>
                          <button className='btn btn-primary ms-2'onClick={()=>{setVissible(true);setUpdatedName(c.name);setSelected(c)}} >Edit</button>
                          <button className='btn btn-danger ms-2'onClick={()=>{handlerDelete(c._id)}} >Delete</button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal open={vissible} onCancel={()=>setVissible(false)}
            footer={null}  
            >
            
            <CategoryForm value={updatedName} setValue={setUpdatedName} handlerSubmit={handlerUpdated}/>
               </Modal>

          </div>
        </div>
      </div>

    </Layout>
  )
}

export default CreateCategory
