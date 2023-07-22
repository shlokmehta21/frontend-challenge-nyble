import React, { useState } from 'react';

import { FormHeader, FormBodyBold, FormSubHeader, FormBody } from 'components/styling/Form';
import { centToDollarStr } from 'utils/number';
import {
  MonthlyPaymentEstimatorWrapper,
  MetricsRow,
  MetricsColumn,
  SliderAndLabelSection,
} from './styles/MonthlyPaymentEstimator';
import Slider from 'components/input/Slider';

const MonthlyPaymentEstimator = () => {
  const [purchasePrice, setPurchasePrice] = useState(0);

  const handleChange = (event: Event, newValue: number) => {
    setPurchasePrice(newValue);
  };

  const marks = [
    {
      value: 0,
      label: '$0',
    },
    {
      value: 4000,
      label: '$4000',
    },
  ];

  return (
    <MonthlyPaymentEstimatorWrapper>
      <MetricsRow>
        <MetricsColumn>
          <FormHeader>{centToDollarStr((purchasePrice * 100 * 1.55) / 24)}</FormHeader>
          <FormBodyBold maxWidth="220px" textAlign="center">
            Estimated monthly payments for 24 months
          </FormBodyBold>
        </MetricsColumn>
        <MetricsColumn>
          <FormSubHeader>{centToDollarStr(purchasePrice * 100 * 0.05)}</FormSubHeader>
          <FormBody>Total saved from 5% cashback</FormBody>
        </MetricsColumn>
      </MetricsRow>

      <SliderAndLabelSection>
        <Slider
          sliderWidth="300px"
          min={0}
          max={4000}
          marks={marks}
          value={purchasePrice}
          onChange={handleChange}
          marginBottom="16px"
        />
        <FormBody>Purchase price: ${purchasePrice}</FormBody>
      </SliderAndLabelSection>
    </MonthlyPaymentEstimatorWrapper>
  );
};

export default MonthlyPaymentEstimator;
