/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addPost, editPost, getPost } from '../../../../Redux/Actions/index';
import style from '../Edit.module.css';

function EditPosts({
  addPost, editPost, getPost, postDetail, msg, id, action,
}) {
  useEffect(() => {
    id && getPost(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [input, setInput] = useState({
    premium: action === 'edit' ? postDetail.premium : '',
    title: action === 'edit' ? postDetail.post_name : '',
    department: action === 'edit' ? postDetail.department : '',
    city: action === 'edit' ? postDetail.city : '',
    street_number: action === 'edit' ? postDetail.street_number : '',
    description: action === 'edit' ? postDetail.description : '',
    stratum: action === 'edit' ? postDetail.street_number : '',
    neighborhood: action === 'edit' ? postDetail.neighborhood : '',
    price: action === 'edit' ? postDetail.price : '',
    prop_type: action === 'edit' ? postDetail.prop_type : '',
    m2: action === 'edit' ? postDetail.m2 : '',
    rooms: action === 'edit' ? postDetail.rooms : '',
    years: action === 'edit' ? postDetail.years : '',
    pool: action === 'edit' ? postDetail.pool : '',
    backyard: action === 'edit' ? postDetail.backyard : '',
    gym: action === 'edit' ? postDetail.gym : '',
    parking_lot: action === 'edit' ? postDetail.parking_lot : '',
    garden: action === 'edit' ? postDetail.garden : '',
    elevator: action === 'edit' ? postDetail.elevator : '',
    security: action === 'edit' ? postDetail.security : '',
    images: action === 'edit' ? postDetail.images : [],
    status: action === 'edit' ? postDetail.status : '',
    createdAt: action === 'edit' ? postDetail.createdAt : '',
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  const [errors, setErrors] = React.useState({});
  useEffect(() => {
    // id && getPost(id);
    console.log('useEffect')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setInput({
      premium: action === 'edit' ? postDetail.premium : '',
      title: action === 'edit' ? postDetail.post_name : '',
      department: action === 'edit' ? postDetail.department : '',
      city: action === 'edit' ? postDetail.city : '',
      street_number: action === 'edit' ? postDetail.street_number : '',
      description: action === 'edit' ? postDetail.description : '',
      stratum: action === 'edit' ? postDetail.street_number : '',
      neighborhood: action === 'edit' ? postDetail.neighborhood : '',
      price: action === 'edit' ? postDetail.price : '',
      prop_type: action === 'edit' ? postDetail.prop_type : '',
      m2: action === 'edit' ? postDetail.m2 : '',
      rooms: action === 'edit' ? postDetail.rooms : '',
      years: action === 'edit' ? postDetail.years : '',
      pool: action === 'edit' ? postDetail.pool : '',
      backyard: action === 'edit' ? postDetail.backyard : '',
      gym: action === 'edit' ? postDetail.gym : '',
      parking_lot: action === 'edit' ? postDetail.parking_lot : '',
      garden: action === 'edit' ? postDetail.garden : '',
      elevator: action === 'edit' ? postDetail.elevator : '',
      security: action === 'edit' ? postDetail.security : '',
      images: action === 'edit' ? postDetail.images : [],
      status: action === 'edit' ? postDetail.status : '',
      createdAt: action === 'edit' ? postDetail.createdAt : '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postDetail.premium]);
  // const isAdmin = true;

  function validate(input) {
    const errors = {};
    if (!input.post_name) {
      errors.post_name = 'Title is required';
    } else if (!input.department) {
      errors.depatment = 'Deparment is required';
    } else if (!input.city) {
      errors.city = 'City is required';
    } else if (!input.street_number) {
      errors.street_number = 'Address is required';
    } else if (!input.neighborhood) {
      errors.neighborhood = 'Neighborhood is required';
    } else if (!input.price) {
      errors.price = 'Price is required';
    } else if (!input.prop_type) {
      errors.prop_type = 'Property type is required';
    } else if (!input.m2) {
      errors.m2 = 'Square meters are required';
    } else if (!input.rooms) {
      errors.rooms = 'Rooms are required';
    } else if (!input.bathrooms) {
      errors.bathrooms = 'Bathrooms is required';
    } else if (input.stratum > 6) {
      errors.stratum = '6 is the maximum stratum';
    }
    return errors;
  }
  function handleChange(e) {
    console.log('handleChange')
    const { name, value } = e.target;
    setErrors(validate({
      ...input,
      [name]: value,
    }));
    setInput({
      ...input,
      [name]: value,
    });
  }
  console.log('React state INPUT in EditPost ', input);
  function handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit')
    if (action === 'edit') {
      editPost(id, input);
      alert('Edited post ', input.post_name);
    } else if (action === 'create') {
      addPost(input);
      alert('Created this post ', input);
    }
    console.log(msg);
  }

  function resetForm(e) {
    e.preventDefault()
    setInput({
      premium: '',
      title: '',
      department: '',
      city: '',
      street_number: '',
      description: '',
      stratum: '',
      neighborhood: '',
      price: '',
      m2: '',
      rooms: '',
      years: '',
      pool: '',
      backyard: '',
      gym: '',
      parking_lot: '',
      garden: '',
      elevator: '',
      security: '',
    });
    document.getElementById('form').reset();
  }

  const [display, setDisplay] = useState(false);
  return (
    <div className={style.ctn}>
      <form onSubmit={handleSubmit} className={style.form} id="form">
        <div className={style.field}>
          <label htmlFor="post_name">Title</label>
          <input
            type="text"
            value={input.post_name}
            name="post_name"
            onChange={handleChange}
          />
        </div>
        {errors.post_name && (<p className={style.pdanger}>{errors.post_name}</p>)}
        <div className={style.field}>
          <label htmlFor="premium"> Premium post</label>
          <input className={style.check} type="checkbox" onChange={handleChange} name="premium" value={input.premium} />
          <br />
        </div>
        <div className={style.field}>
          <label htmlFor="department">Department</label>
          <input
            type="text"
            value={input.department}
            name="department"
            onChange={handleChange}
          />
        </div>
        {errors.department && (<p className={style.pdanger}>{errors.department}</p>)}
        <div className={style.field}>
          <label htmlFor="city">City</label>
          <input
            type="text"
            value={input.city}
            name="city"
            onChange={handleChange}
          />
        </div>
        {errors.city && (<p className={style.pdanger}>{errors.city}</p>)}
        <div className={style.field}>
          <label htmlFor="street_number">Address</label>
          <input
            type="text"
            value={input.street_number}
            name="street_number"
            onChange={handleChange}
          />
        </div>
        {errors.street_number && (<p className={style.pdanger}>{errors.street_number}</p>)}
        <div className={style.field}>
          <label htmlFor="neighborhood">Neighborhood</label>
          <input
            type="text"
            value={input.neighborhood}
            name="neighborhood"
            onChange={handleChange}
          />
        </div>
        {errors.neighborhood && (<p className={style.pdanger}>{errors.neighborhood}</p>)}
        <div className={style.field}>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            value={input.price}
            name="price"
            onChange={handleChange}
          />
        </div>
        {errors.price && (<p className={style.pdanger}>{errors.price}</p>)}
        <div className={style.field}>
          <label htmlFor="prop_type">Type of property</label>
          <select className={style.selectFilter} name="prop_type" value={input.prop_type} onChange={handleChange}>
            <option value="" disabled hidden>Choose one</option>
            {['Casa', 'Apartamento'].map((type, i) => (<option key={i} value={type}>{type}</option>))}
          </select>
        </div>
        {errors.prop_type && (<p className={style.pdanger}>{errors.prop_type}</p>)}
        <div className={style.field}>
          <label htmlFor="m2">Square meters</label>
          <input
            type="number"
            value={input.m2}
            name="m2"
            min="0"
            onChange={handleChange}
          />
        </div>
        {errors.m2 && (<p className={style.pdanger}>{errors.m2}</p>)}
        <div className={style.field}>
          <label htmlFor="rooms">Rooms</label>
          <input
            type="number"
            value={input.rooms}
            name="rooms"
            min="0"
            onChange={handleChange}
          />
        </div>
        {errors.rooms && (<p className={style.pdanger}>{errors.rooms}</p>)}
        <div className={style.field}>
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            type="number"
            value={input.bathrooms}
            name="bathrooms"
            min="0"
            onChange={handleChange}
          />
        </div>
        {errors.bathrooms && (<p className={style.pdanger}>{errors.bathrooms}</p>)}
        <div className={style.field}>
          <label htmlFor="stratum">Stratum</label>
          <input
            type="number"
            value={input.stratum}
            name="stratum"
            min="0"
            onChange={handleChange}
          />
        </div>
        {errors.stratum && (<p className={style.pdanger}>{errors.stratum}</p>)}
        <div className={style.field}>
          <label htmlFor="years">Years</label>
          <input
            type="number"
            value={input.years}
            name="years"
            min="0"
            onChange={handleChange}
          />
        </div>
        <div className={style.field}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={input.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className={style.field}>
          <label htmlFor="photo">Pictures URL</label>
          <input
            type="text"
            value={input.photo}
            name="photo"
            onChange={handleChange}
          />
        </div>
        <div className={style.field} onClick={() => setDisplay(!display)}>
          <p className={style.tit_facilities}>
            Other facilities
          </p>
        </div>
        <div className={display ? style.facilities : style.noFacilities}>
          <input type="checkbox" onChange={handleChange} name="pool" value={input.pool} />
          <label htmlFor="pool"> Swimming pool</label>
          <br />
          <input type="checkbox" onChange={handleChange} name="backyard" value={input.backyard} />
          <label htmlFor="backyard"> Backyard</label>
          <br />
          <input type="checkbox" onChange={handleChange} name="gym" value={input.gym} />
          <label htmlFor="gym"> Gym</label>
          <br />
          <input type="checkbox" onChange={handleChange} name="bbq" value={input.bbq} />
          <label htmlFor="bbq"> Barbecue</label>
          <br />
          <input type="checkbox" onChange={handleChange} name="parking_lot" value={input.parking_lot} />
          <label htmlFor="parking_lot"> Parking lot</label>
          <br />
          <input type="checkbox" onChange={handleChange} name="elevator" value={input.elevator} />
          <label htmlFor="elevator"> Elevator</label>
          <br />
          <input type="checkbox" onChange={handleChange} name="security" value={input.security} />
          <label htmlFor="secutiry"> Security</label>
          <br />
          <input type="checkbox" onChange={handleChange} name="garden" value={input.garden} />
          <label htmlFor="garden"> Garden</label>
        </div>
        <div className={style.btnReset}>
          <button className={style.btn} type="button" onClick={(e)=>resetForm(e)}>Reset</button>
          <button className={style.btn} type="submit" onClick={handleSubmit}>Save changes</button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  postDetail: state.detail,
  msg: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (postId) => dispatch(getPost(postId)),
  editPost: (postId) => dispatch(editPost(postId)),
  addPost: (post) => dispatch(addPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPosts);
