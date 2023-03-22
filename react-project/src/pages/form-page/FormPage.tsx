import { SingleCard } from '../../components/single-card/SingleCard';
import React, { RefObject } from 'react';
import { CardType } from '../../types';
import './formPage.css';

class FormPage extends React.Component {
  state: { cards: CardType[] };
  cityInput: RefObject<HTMLInputElement>;
  fileInput: RefObject<HTMLInputElement>;
  dateInput: RefObject<HTMLInputElement>;
  districtInput: RefObject<HTMLInputElement>;
  areaInput: RefObject<HTMLInputElement>;
  populationInput: RefObject<HTMLInputElement>;
  descriptionInput: RefObject<HTMLInputElement>;

  file: unknown;

  constructor(props: CardType) {
    super(props);
    this.state = { cards: [] };
    this.cityInput = React.createRef();
    this.fileInput = React.createRef();
    this.dateInput = React.createRef();
    this.districtInput = React.createRef();
    this.areaInput = React.createRef();
    this.populationInput = React.createRef();
    this.descriptionInput = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
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
          fileImg: this.fileInput.current?.files?.length
            ? this.fileInput.current?.files[0]
            : undefined,
        },
      ],
    });
    this.file = this.fileInput.current?.files;
    console.log('submit');
    console.log('state:', this.state);
    console.log('this.file', this.file);
    console.log('file inp:', this.fileInput.current?.files);
  }

  render() {
    return (
      <>
        <div className="form-page-wrap">
          <div className="form-wrap">
            <form className="form">
              Please enter below data of the city:
              <label>
                City Name
                <input type="text" ref={this.cityInput}></input>
              </label>
              <label>
                Area of the city
                <input type="text" ref={this.areaInput}></input>
              </label>
              <label>
                Population of the city
                <input type="text" ref={this.populationInput}></input>
              </label>
              <label>
                Description of the city
                <input type="text" ref={this.descriptionInput}></input>
              </label>
              <label>
                Date of foundation
                <input type="date" name="date"></input>
              </label>
              <label>
                Choose the district
                <select>
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
              <label>
                Have you already visited this city?
                <input type="radio" name="choose"></input>
                <input type="radio" name="choose"></input>
              </label>
              <label>
                <input type="file" ref={this.fileInput}></input>
              </label>
              <input type="submit" value="submit" onClick={this.handleSubmit}></input>
            </form>
          </div>
          <div className="your-cards-wrap">
            <h2 className="">Your own cards:</h2>
            {this.state.cards.length !== 0 && (
              <div>
                {this.state.cards.map((oneCard, index) => (
                  <SingleCard
                    key={index}
                    name={oneCard.name}
                    img={`${URL.createObjectURL(oneCard.fileImg as unknown as Blob | MediaSource)}`}
                    district={oneCard.district}
                    area={oneCard.area}
                    population={oneCard.population}
                    description={oneCard.description}
                  />
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
  }
}

export default FormPage;
