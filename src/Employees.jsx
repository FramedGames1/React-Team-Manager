import femaleProfile from './images/femaleProfile.jpeg';
import maleProfile from './images/maleProfile.jpeg';

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) =>{
    return (
        <main className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-6'>
                    <select id="select"
                    className='form-select form-select-lg' 
                    value={selectedTeam} 
                    onChange={handleTeamSelectionChange}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                <div className='edit'>
                    <label for="checkbox">Edit Teams</label>
                    <input type="checkbox" id="checkbox"></input>
                </div>
                </div>
                <div className='row justify-content-center mt-3 mb-3'>
                    <div className='col-8'>
                        <div className='card-collection'>
                        {
                        employees.map((employee) => (
                        <div 
                        id={employee.id} 
                        className={(employee.teamName === selectedTeam ? 'card m-2 standout':'card m-2')} 
                        style={{cursor: 'pointer'}} 
                        onClick ={handleEmployeeCardClick}>
                            {(employee.gender ==='male') ?<img src={maleProfile} className="card-img-top"/>
                                                            :<img src={femaleProfile} className="card-img-top"/>}
                        <div className='card-body'>
                            <h5 className='card-title'>{employee.fullName}</h5>
                            <p className='card-text' ><b>Team:</b>{employee.teamName}</p>
                            <p className='card-text' ><b>Role:</b>{employee.designation}</p>
                        </div>
                    </div>
                ))
            }
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}
export default Employees