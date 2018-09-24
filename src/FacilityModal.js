import { Modal, Button } from 'antd';
import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import Person from './Person/Person';

class FacilityModal extends Component {
  state = {
     cities: [
         {name : "Antioch"},
         {name : "Fremont"},
         {name : "Fresno"},
         {name : "Manteca"},
         {name : "Modesto"},
         {name : "Oakland"},
         {name : "Redwood City"},
         {name : "Santa Clara"},
         {name : "Richmond"},
         {name : "Sacramento"},
         {name : "Wallnut Creek"},
         {name : "Vallejo"}
     ]
   }



  handleAddUser = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      visible: false,
      name:''
    });
  }

  handleChange = (e) =>{
    this.setState({
      name : e.target.value
    })
  }


  render() {

       let posts = (

         <div >All Facilities (NCAL)
               <div className = 'Modal'>
                   {this.state.cities.map(post =>
                       {
                         return <Person name = {post.name}/>
                       })}
               </div>
               </div>

          );

    return (

      <div>

        <Modal
          title="Change Facility"
          visible={this.props.visible}
          onCancel={this.props.onCancel}
        >
        <div>{posts}</div>
        </Modal>
      </div>
    );
  }
}



export default FacilityModal;
