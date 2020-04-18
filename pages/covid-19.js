import { Cards, CountryPicker } from '../components/pages/covid-tracker';
import React from 'react';
import Wave from '../components/Wave';
import { fetchData } from '../api';
import LayoutContact from '../components/LayoutContact';

class Covid extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <LayoutContact>
        <div className="page-banner covid-banner">
          <div className="container">
            <div className="pagebanner-text text-white">
              <h1>  <strong className="">Covid</strong> 19  </h1>
            </div>
          </div>
          <Wave />
        </div>
        <section className="covid-sec sec-padding">
          <div className="container">
            <div className="countrypicker-box mb-4">
              <label>Select Country</label>
              <CountryPicker handleCountryChange={this.handleCountryChange} />
            </div>

            <Cards data={data} />

          </div>
        </section>


      </LayoutContact>
    );
  }
}

export default Covid;
