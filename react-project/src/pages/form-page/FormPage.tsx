import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
// import { useAppDispatch, useTypeSelector } from '../../hooks/useAppDispatch';
import { FormCard } from './components/cardInForm/FormCard';
import Submitted from './components/Submitted';
import { CardType } from '../../types';
import isValidCity from './functions/isValidCity';
import InputText from './components/fields/InputText';
import SelectField from './components/fields/SelectField';
import RadioInput from './components/fields/RadioInput';
import Checkbox from './components/fields/Checkbox';
import InputDate from './components/fields/InputDate';
import FileInput from './components/fields/FileInput';
import InputName from './components/fields/InputName';
import isValidNumber from './functions/isValidNumber';
// import { ADD_FORM_VALUES } from '../../store/consts';
import './formPage.css';

const FormPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CardType>();
  // const formValues = useTypeSelector<CardType[]>((state) => state.formValues);
  // const dispatch = useAppDispatch();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<CardType> = (data) => {
    // dispatch({
    //   payload: {
    //     ...data,
    //     fileImg: data.fileImg
    //       ? `${URL.createObjectURL(data.fileImg[0] as Blob | MediaSource)}`
    //       : '',
    //   },
    //   type: ADD_FORM_VALUES,
    // });
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <div className="form-page-wrap">
        {submitted && <Submitted setSubmitted={setSubmitted} />}
        <div className="form-wrap">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className="form-name">Please enter below data of the city:</p>
            <InputText
              register={register}
              label={'name'}
              validationFunc={isValidCity}
              minLength={2}
              errorMessage={'This field should start from upper letter'}
            />
            {errors.name && <div className="form-errors">{errors.name.message}</div>}
            <InputText
              register={register}
              label={'area'}
              validationFunc={isValidNumber}
              errorMessage={'It should be a number'}
            />
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
              validationFunc={() => true}
              minLength={5}
            />
            {errors.description && <div className="form-errors">{errors.description.message}</div>}
            <InputDate register={register} />
            {errors.date && <div className="form-errors">{errors.date.message}</div>}
            <SelectField register={register} />
            <RadioInput register={register} />
            {errors.beenThere && <div className="form-errors">{errors.beenThere.message}</div>}
            <FileInput register={register} />
            {errors.fileImg && <div className="form-errors">{errors.fileImg.message}</div>}
            <Checkbox register={register} />
            <InputName register={register} />
            <input className="submit-button" type="submit" value="submit"></input>
          </form>
        </div>
        <div className="your-cards-wrap">
          <h2 className="">Your own cards:</h2>
          {/* {formValues.length !== 0 && (
            <div className="cards-in-form">
              {formValues.map((oneCard, index) => (
                <React.Fragment key={index}>
                  <div className="card-in-form">
                    {oneCard.wantAName && <p>{`Card by ${oneCard.namePerson}`}</p>}
                    <p>{oneCard.beenThere === 'yes' ? 'Already visited!' : 'Not yet visited'}</p>
                    <FormCard
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
          {formValues.length === 0 && (
            <h3>
              You did not add your cards yet. If you want to add your card on this page, fill the
              form and press submit button.
            </h3>
          )} */}
        </div>
      </div>
    </>
  );
};

export default FormPage;
