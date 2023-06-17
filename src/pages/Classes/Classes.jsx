import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import useAuth from '../../Routes/useAuth';
import ClassCard from './ClassCard';
import { AuthContext } from '../provider/AuthProvider';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const { loading} = useContext(AuthContext);
    useEffect(() => {
        fetch('https://summer-camp-school-server-beige.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
    }, [])
    if (loading) {
        return <div className="text-center py-60">
            <h1 className="text-2xl font-bold text-black">Loading<span className="text-secondary">.....</span></h1>
            <progress className="progress progress-secondary mt-4 mx-auto w-1/4"></progress>
        </div>
    }

    return (
        <div className='bg-slate-200 rounded-md py-5 px-4'>
            <Helmet>
                <title>Teaching Corner | Classes</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center">Our Classes Here !!<br/>
            Hope it will be useful for you .
            </h1>
            <div className="divider"></div>
            <div className='grid md:grid-cols-2 space-y-4 lg:grid-cols-3 mx-auto w-full'>
                {
                    classes.map((classData) => <ClassCard
                        key={classData._id}
                        classData={classData}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;