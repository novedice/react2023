import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SingleCard } from '../../components/single-card/SingleCard';
import Submitted from './components/Submitted';
import { CardType, FormValues } from '../../types';
import isValidCity from './functions/isValidCity';
import InputText from './components/fields/InputText';
import SelectField from './components/fields/SelectField';
import RadioInput from './components/fields/RadioInput';
import Checkbox from './components/fields/Checkbox';
import InputDate from './components/fields/InputDate';
import FileInput from './components/fields/FileInput';
import isValidNumber from './functions/isValidNumber';
import './formPage.css';

const FormPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();
  const [cards, setCards] = useState<CardType[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setCards([
      ...cards,
      { ...data, fileImg: `${URL.createObjectURL(data.fileImg ? data.fileImg[0] : '')}` },
    ]);
    setSubmitted(true);
    setValue('name', '');
    setValue('area', '');
    setValue('population', '');
    setValue('description', '');
    setValue('district', 'lisbon');
    setValue('date', '');
    setValue('fileImg', '');
    setValue('beenThere', '');
    setValue('wantAName', false);
    setValue('namePerson', '');
  };

  return (
    <>
      <div className="form-page-wrap">
        {submitted && <Submitted setSubmitted={setSubmitted} />}
        <div className="form-wrap">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className="form-name">Please enter below data of the city:</p>
            <InputText register={register} label={'name'} validationFunc={isValidCity} />
            {errors.name && <div className="form-errors">{errors.name.message}</div>}
            <InputText register={register} label={'area'} validationFunc={isValidNumber} />
            {errors.area && <div className="form-errors">{errors.area.message}</div>}
            <InputText
              register={register}
              label={'population'}
              validationFunc={isValidNumber}
              errorMessage={'It should be a number'}
            />
            {errors.population && <div className="form-errors">{errors.population.message}</div>}
            <InputText
              label={'description'}
              register={register}
              validationFunc={() => {}}
              minLength={5}
            />
            {errors.description && <div className="form-errors">{errors.description.message}</div>}
            <InputDate register={register} />
            {errors.date && <div className="form-errors">This field is required</div>}
            <SelectField register={register} />
            <RadioInput register={register} />
            {errors.beenThere && <div className="form-errors">This field is required</div>}
            <FileInput register={register} />
            {errors.fileImg && <div className="form-errors">This field is required</div>}
            <Checkbox register={register} />
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
                      img={oneCard.fileImg}
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
