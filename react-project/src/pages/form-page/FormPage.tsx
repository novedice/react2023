import { SingleCard } from '../../components/single-card/SingleCard';
import React, { RefObject } from 'react';
import { CardType, FormErrors } from '../../types';
import isValidCity from './functions/isValidCity';
import isValidNumber from './functions/isValidNumber';
import isLength from './functions/isLength';
import isEmpty from './functions/isEmpty';
import './formPage.css';

const FormPage = () => {
  // state: { cards: CardType[]; errors: FormErrors; submitted: boolean };
  // cityInput: RefObject<HTMLInputElement>;
  // fileInput: RefObject<HTMLInputElement>;
  // dateInput: RefObject<HTMLInputElement>;
  // districtInput: RefObject<HTMLSelectElement>;
  // areaInput: RefObject<HTMLInputElement>;
  // populationInput: RefObject<HTMLInputElement>;
  // descriptionInput: RefObject<HTMLInputElement>;
  // beenThereInput: RefObject<HTMLInputElement>;
  // wantANameInput: RefObject<HTMLInputElement>;
  // nameInput: RefObject<HTMLInputElement>;
  // file: unknown;

  // constructor(props: CardType) {
  //   super(props);
  //   this.state = {
  //     cards: [],
  //     errors: {
  //       cityError: '',
  //       areaError: '',
  //       dateError: '',
  //       districtError: '',
  //       populationError: '',
  //       fileImgError: '',
  //       imgError: '',
  //       descriptionError: '',
  //       beenThereError: '',
  //     },
  //     submitted: false,
  //   };
  //   this.cityInput = React.createRef();
  //   this.fileInput = React.createRef();
  //   this.dateInput = React.createRef();
  //   this.districtInput = React.createRef();
  //   this.areaInput = React.createRef();
  //   this.populationInput = React.createRef();
  //   this.descriptionInput = React.createRef();
  //   this.beenThereInput = React.createRef();
  //   this.wantANameInput = React.createRef();
  //   this.nameInput = React.createRef();

  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.handleOk = this.handleOk.bind(this);
  // }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let errors = 0;
    this.setState({
      cards: this.state.cards,
      errors: {
        cityError: '',
        areaError: '',
        dateError: '',
        districtError: '',
        populationError: '',
        fileImgError: '',
        imgError: '',
        descriptionError: '',
        beenThereError: '',
      },
      submitted: false,
    });

    errors = isValidCity(this.cityInput.current?.value as string, errors).error;
    errors = isValidNumber(this.areaInput.current?.value as string, errors).error;
    errors = isValidNumber(this.populationInput.current?.value as string, errors).error;
    errors = isLength(this.descriptionInput.current?.value as string, errors, 5).error;
    errors = isEmpty(this.descriptionInput.current?.value as string, errors).error;
    errors = isEmpty(this.cityInput.current?.value as string, errors).error;
    errors = isEmpty(this.areaInput.current?.value as string, errors).error;
    errors = isEmpty(this.populationInput.current?.value as string, errors).error;
    errors = isEmpty(this.dateInput.current?.value as string, errors).error;

    if (errors !== 0) {
      this.setState({
        cards: this.state.cards,
        errors: {
          cityError:
            isValidCity(this.cityInput.current?.value as string, errors).message +
            ' ' +
            isEmpty(this.cityInput.current?.value as string, errors).message,
          areaError:
            isValidNumber(this.areaInput.current?.value as string, errors).message +
            ' ' +
            isEmpty(this.areaInput.current?.value as string, errors).message,
          dateError: isEmpty(this.dateInput.current?.value as string, errors).message,
          populationError:
            isEmpty(this.populationInput.current?.value as string, errors).message +
            isValidNumber(this.populationInput.current?.value as string, errors).message,
          fileImgError: this.fileInput.current?.files?.length
            ? ''
            : 'please upload the image. This field is requered',
          imgError: '',
          descriptionError:
            isLength(this.descriptionInput.current?.value as string, errors, 5).message +
            ' ' +
            isEmpty(this.descriptionInput.current?.value as string, errors).message,
          beenThereError: '',
        },
        submitted: false,
      });
    }

    if (errors === 0 && this.fileInput.current?.files?.length) {
      this.setState({
        cards: [
          ...this.state.cards,
          {
            name: this.cityInput.current?.value,
            date: this.dateInput.current?.value,
            district: this.districtInput.current?.value,
            area: this.areaInput.current?.value,
            population: this.populationInput.current?.value,
            description: this.descriptionInput.current?.value,
            beenThere: this.beenThereInput.current?.checked,
            fileImg: this.fileInput.current?.files?.length
              ? this.fileInput.current?.files[0]
              : undefined,
            wantAName: this.wantANameInput.current?.checked,
            namePerson: this.nameInput.current?.value,
          },
        ],
        submitted: true,
      });

      if (this.cityInput.current) this.cityInput.current.value = '';
      this.fileInput.current.value = '';
      if (this.dateInput.current) this.dateInput.current.value = '';
      if (this.areaInput.current) this.areaInput.current.value = '';
      if (this.populationInput.current) this.populationInput.current.value = '';
      if (this.descriptionInput.current) this.descriptionInput.current.value = '';
      if (this.beenThereInput.current) this.beenThereInput.current.checked = false;
      if (this.wantANameInput.current) this.wantANameInput.current.checked = false;
      if (this.nameInput.current) this.nameInput.current.value = '';
      if (this.districtInput.current) this.districtInput.current.value = 'lisbon';
    } else return;

    return;
  };

  const handleOk = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.setState({ submitted: false });
  };

  return (
    <>
      <div className="form-page-wrap">
        {this.state.submitted && (
          <div className="submitted">
            <p>Your form is submitted. The card successfully added!</p>
            <button className="submit-button" onClick={this.handleOk}>
              OK
            </button>
          </div>
        )}
        <div className="form-wrap">
          <form className="form">
            <p className="form-name">Please enter below data of the city:</p>
            <label className="form-label">
              City Name
              <input className="form-input-text" type="text" ref={this.cityInput}></input>
            </label>
            {this.state.errors.cityError && (
              <div className="form-errors">{this.state.errors.cityError}</div>
            )}
            <label className="form-label">
              Area of the city
              <input className="form-input-text" type="text" ref={this.areaInput}></input>
            </label>
            {this.state.errors.areaError && (
              <div className="form-errors">{this.state.errors.areaError}</div>
            )}
            <label className="form-label">
              Population of the city
              <input className="form-input-text" type="text" ref={this.populationInput}></input>
            </label>
            {this.state.errors.populationError && (
              <div className="form-errors">{this.state.errors.populationError}</div>
            )}
            <label className="form-label">
              Description of the city
              <input className="form-input-text" type="text" ref={this.descriptionInput}></input>
            </label>
            {this.state.errors.descriptionError && (
              <div className="form-errors">{this.state.errors.descriptionError}</div>
            )}
            <label className="form-label">
              Date of foundation
              <input
                className="form-input-text"
                type="date"
                name="date"
                ref={this.dateInput}
              ></input>
            </label>
            {this.state.errors.dateError && (
              <div className="form-errors">{this.state.errors.dateError}</div>
            )}
            <label className="form-label">
              Choose the district
              <select className="form-input-text select" ref={this.districtInput}>
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
              <input type="radio" name="choose" value="yes" ref={this.beenThereInput}></input>
            </label>
            <label className="form-label radio">
              No
              <input type="radio" name="choose" value="no" ref={this.beenThereInput}></input>
            </label>
            <label className="form-label">
              Add photo of the city
              <input className="form-input-text" type="file" ref={this.fileInput}></input>
            </label>
            {this.state.errors.fileImgError && (
              <div className="form-errors">{this.state.errors.fileImgError}</div>
            )}
            <label className="form-label check">
              <input
                className="form-input-text checkbox"
                type="checkbox"
                ref={this.wantANameInput}
              ></input>
              I want to add my name to the card
            </label>
            <label className="form-label">
              Enter your name
              <input className="form-input-text" type="text" ref={this.nameInput}></input>
            </label>
            <input
              className="submit-button"
              type="submit"
              value="submit"
              onClick={this.handleSubmit}
            ></input>
          </form>
        </div>
        <div className="your-cards-wrap">
          <h2 className="">Your own cards:</h2>
          {this.state.cards.length !== 0 && (
            <div className="cards-in-form">
              {this.state.cards.map((oneCard, index) => (
                <React.Fragment key={index}>
                  <div className="card-in-form">
                    {oneCard.wantAName && <p>{`Card by ${oneCard.namePerson}`}</p>}
                    {!oneCard.beenThere && <p>Already visited!</p>}
                    {oneCard.beenThere && <p>Not yet visited</p>}
                    <SingleCard
                      name={oneCard.name}
                      img={`${URL.createObjectURL(
                        oneCard.fileImg as unknown as Blob | MediaSource
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
          {this.state.cards.length === 0 && (
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
