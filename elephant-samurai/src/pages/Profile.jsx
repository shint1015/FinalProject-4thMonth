import SubMenu from '../components/common/subNav'

// call default from API to add info in place hodler

export default function Profile(){
    return (
        <>
        <div className='px-[2rem] sm:px-[3rem] lg:px-[5rem]'>
            <h4 className="mt-8 text-primary-yellow text-h4 mb-6">Welcome back !</h4>
            <SubMenu/>
            {/* form */}
            <form className='mt-4'>
                <div>
                    <p className='text-subbody text-dark-gray'>First Name</p>
                    <input type="text" 
                    placeholder="" 
                    className="bg-primary-white border-none placeholder-dark-grey text-black text-subbody focus:outline-none p-[1rem] rounded-[4px]"
                    />
                </div>
                <div>
                    <p className='text-subbody text-dark-gray'>Last Name</p>
                    <input type="text" 
                    placeholder="" 
                    className="bg-primary-white border-none placeholder-dark-grey text-black text-subbody focus:outline-none p-[1rem] rounded-[4px]"
                    />
                </div>    
                <div>
                    <p className='text-subbody text-dark-gray'>Email</p>
                    <input type="text" 
                    placeholder="" 
                    className="bg-primary-white border-none placeholder-dark-grey text-black text-subbody focus:outline-none p-[1rem] rounded-[4px]"
                    />
                </div> 
                <div>
                    <p className='text-subbody text-dark-gray'>Password</p>
                    <input type="text" 
                    placeholder="" 
                    className="bg-primary-white border-none placeholder-dark-grey text-black text-subbody focus:outline-none p-[1rem] rounded-[4px]"
                    />
                </div>   
                <button type="submit" className="bg-primary-yellow text-black py-3 px-6 my-6 rounded hover:bg-secondary-yellow text-subbody">Update Profile</button>
            </form>                                 
        </div>
        </>
    )
}