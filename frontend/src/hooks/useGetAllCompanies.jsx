// import React from 'react'

// export default function useGetCompanyById() {
//   return (
//     <div>useGetCompanyById</div>
//   )
// }


import { setCompanies} from '@/redux/companySlice';
// import { setAllJobs } from '@/redux/jobSlice';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

export default function useGetAllCompanies(companyId) {
    const dispatch = useDispatch();
   useEffect(()=>{
    const fetchCompanies = async () =>{
        try {
            const res = await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true});
            if(res.data.success){
                dispatch(setCompanies(res.data.companies));
            }
        } catch (error) {
            console.log(error)
            
        }
    }
    fetchCompanies();
   },[])
  
   
}

