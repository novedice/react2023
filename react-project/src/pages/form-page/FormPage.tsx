import { SingleCard } from '../../components/single-card/SingleCard';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CardType } from '../../types';
// import isValidCity from './functions/isValidCity';
// import isValidNumber from './functions/isValidNumber';
// import isLength from './functions/isLength';
// import isEmpty from './functions/isEmpty';
import './formPage.css';

type FormValues = {
  name: string;
  img: string;
  district: string;
  area: string;
  population: string;
  description: string;
  date?: Date;
  fileImg?: HTMLInputElement;
  beenThere?: boolean;
  wantAName?: boolean;
  namePerson?: string;
};

const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [cards, setCards] = useState<CardType[]>([]);
  const [submitted, setSubmitted] = useState(false);
  let allErrors = 0;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    allErrors = 0;
    console.log('data:', data);
    // allErrors = isValidCity(data.name, allErrors).error;
    // allErrors = isValidNumber(data.population, allErrors).error;
    console.log('all err', allErrors);
    if (allErrors === 0) {
      setCards([...cards, data]);
      setSubmitted(true);
    }
  };

  const handleOk = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setSubmitted(false);
  };

  return (
    <>
      <div className="form-page-wrap">
        {submitted && (
          <div className="submitted">
            <p>Your form is submitted. The card successfully added!</p>
            <button className="submit-button" onClick={handleOk}>
              OK
            </button>
          </div>
        )}
        <div className="form-wrap">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className="form-name">Please enter below data of the city:</p>
            <label className="form-label">
              City Name
              <input
                className="form-input-text"
                type="text"
                {...register('name', { required: true })}
              ></input>
            </label>
            {errors.name && <div className="form-errors">Name error</div>}
            <label className="form-label">
              Area of the city
              <input
                className="form-input-text"
                type="text"
                name="area"
                {...register('area', { required: true, minLength: 3 })}
              ></input>
            </label>
            {errors.area && <div className="form-errors">This field is required</div>}
            <label className="form-label">
              Population of the city
              <input
                className="form-input-text"
                type="text"
                {...register('population', { required: true })}
              ></input>
            </label>
            {errors.population && <div className="form-errors">This field is required</div>}
            <label className="form-label">
              Description of the city
              <input
                className="form-input-text"
                type="text"
                {...register('description', { required: true, minLength: 5 })}
              ></input>
            </label>
            {errors.description && <div className="form-errors">This field is required</div>}
            <label className="form-label">
              Date of foundation
              <input
                className="form-input-text"
                type="date"
                name="date"
                {...register('date', { required: true })}
              ></input>
            </label>
            {errors.date && <div className="form-errors">This field is required</div>}
            <label className="form-label">
              Choose the district
              <select className="form-input-text select" {...register('district')}>
                <option value="lisbon">lisbon</option>
                <option value="azores">azores</option>
                <option value="aveiro">aveiro</option>
                <option value="beja">beja</option>
                <option value="braganca">braganca</option>
                <option value="coimbra">coimbra</option>
                <option value="evora">evora</option>
                <option value="faro">faro</option>
                <option value="leiria">leiria</option>
                <option value="madeira">madeira</option>
                <option value="porto">porto</option>
                <option value="setubal">setubal</option>
                <option value="viana do castelo">viana do castelo</option>
                <option value="vila real">vila real</option>
                <option value="viseu">viseu</option>
                <option value="portalegre">portalegre</option>
                <option value="castelo branco">braga</option>
              </select>
            </label>
            <p>Have you already visited this city?</p>
            <label className="form-label radio">
              Yes
              <input
                type="radio"
                name="beenThere"
                value="yes"
                {...register('beenThere', { required: true })}
              ></input>
            </label>
            <label className="form-label radio">
              No
              <input
                type="radio"
                name="beenThere"
                value="no"
                {...register('beenThere', { required: true })}
              ></input>
            </label>
            {errors.choose && <div className="form-errors">Choose Error</div>}
            <label className="form-label">
              Add photo of the city
              <input
                className="form-input-text"
                type="file"
                {...register('fileImg', { required: true })}
              ></input>
            </label>
            {errors.file && <div className="form-errors">File error</div>}
            <label className="form-label check">
              <input
                className="form-input-text checkbox"
                type="checkbox"
                {...register('wantAName')}
              ></input>
              I want to add my name to the card
            </label>
            <label className="form-label">
              Enter your name
              <input className="form-input-text" type="text" {...register('namePerson')}></input>
            </label>
            <input className="submit-button" type="submit" value="submit"></input>
          </form>
        </div>
        <div className="your-cards-wrap">
          <h2 className="">Your own cards:</h2>
          {cards.length !== 0 && (
            <div className="cards-in-form">
              {cards.map((oneCard, index) => (
                <React.Fragment key={index}>
                  <div className="card-in-form">
                    {oneCard.wantAName && <p>{`Card by ${oneCard.namePerson}`}</p>}
                    {oneCard.beenThere === 'yes' && <p>Already visited!</p>}
                    {oneCard.beenThere === 'no' && <p>Not yet visited</p>}
                    <SingleCard
                      name={oneCard.name}
                      img={`${URL.createObjectURL(
                        oneCard.fileImg[0] as unknown as Blob | MediaSource
                      )}`}
                      district={oneCard.district}
                      area={oneCard.area}
                      population={oneCard.population}
                      description={oneCard.description}
                      namePerson={oneCard.namePerson}
                    />
                    <p>{`Date of foundation: ${oneCard.date}`}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}
          {cards.length === 0 && (
            <h3>
              You did not add your cards yet. If you want to add your card on this page, fill the
              form and press submit button.
            </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default FormPage;
