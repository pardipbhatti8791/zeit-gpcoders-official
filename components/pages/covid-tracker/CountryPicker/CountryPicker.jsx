import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { fetchCountries } from '../../../../api';

// import styles from './CountryPicker.module.css';
const { Option } = Select;
const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select country"
      onChange={(value) => handleCountryChange(value)}>
      <Option value="">Select country</Option>
      {countries.map((country, i) => {
        return (
          <Select.Option key={i} value={country.toLocaleLowerCase()}>
            {country}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export default Countries;
