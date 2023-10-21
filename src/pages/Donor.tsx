import { Get, fbLogOut } from '../config/firebase/firebasemethod'
import ABTable from '../components/ABTable';
import React, { useEffect, useState } from 'react';
import ABButton from '../components/ABButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Donor() {


    const [users, setUsers] = useState<any>([])
    const userData = useSelector((data: any) => data.user)

    const blood = userData && userData && userData.personalDetails.bloodgroup;

    const O = "O";
    const A = "A";
    const B = "B";
    const AB = "AB";

    const loginUser = () => {
        Get(`users`)
            .then((res: any) => {
                setUsers(res)
                if (blood == O) {
                    const a = res.map((x: any) => x);
                    setUsers([...a]);
                    const b = res.filter((x: any) => x.bloodgroup == blood);
                    setUsers([...b]);
                }
                if (blood == A) {
                    const a = res.filter((x: any) => x.bloodgroup == AB);
                    const b = res.filter((x: any) => x.bloodgroup == blood);
                    setUsers([...a, ...b]);
                }
                if (blood == B) {
                    const a = res.filter((x: any) => x.bloodgroup == AB);
                    const b = res.filter((x: any) => x.bloodgroup == blood);
                    setUsers([...a, ...b]);
                }
                if (blood == AB) {
                    const b = res.filter((x: any) => x.bloodgroup == blood);
                    setUsers([...b]);
                }
                // console.log(res)
                // users && Array.isArray(users) && users.map((x: any, i: any) => {
                //     if (x.bloodgroup == 'A') {
                //         console.log(x)
                //     }
                // }
                // )
                // setFiltered(users)
                // const userData = users.filter((x: any) => x.bloodgroup == 'A');
                // console.log(userData);
            })
            .catch((err: any) => {
                console.log(err)
            })

    }



    const logOut = () => {
        fbLogOut().then((res) => {
            navigate('/login');
        })
            .catch(err => err)
    }


    const navigate = useNavigate()


    const navToAcceptor = () => {
        navigate('/acceptor')
    }

    useEffect(() => {
        loginUser()
    }, [])


    return (
        <>
            <div className='d-flex justify-content-around align-items-center'>
                <ABButton onClick={navToAcceptor} label='Want Blood' />
                <h1 className='text-center m-4 fw-bold'>Blood Supply Center</h1>
                <ABButton onClick={logOut} label='Logout' />
            </div>

            <div className='grid grid-cols-4'>
                <div className='col-span-3 mx-5 text-center'>
                    <ABTable
                        label="Blood Accepter List"
                        dataSource={users}
                        cols={[
                            {
                                displayName: "Name",
                                key: "fullName",
                            },
                            {
                                displayName: "Contact",
                                key: "contactnumber",
                            },
                            {
                                displayName: "Blood Group",
                                key: "bloodgroup",
                            },
                        ]}
                    /></div>
                <div>
                    <div className='border border-2 border-black p-3 mx-5'>

                        <p>Name : {userData.personalDetails.fullName}</p>
                        <p>Contact  :  {userData.personalDetails.contactnumber}</p>
                        <p>Blood Group  : {userData.personalDetails.bloodgroup}</p>
                    </div>

                </div>

            </div>
        </>
    )
}
