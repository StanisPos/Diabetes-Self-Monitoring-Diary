import React from 'react';
import { GlucoseMeasurementsList } from '../../components/glucose-measurements/glucose-measurements-list';
import { GlucoseMeasurementsType } from '../../components/glucose-measurements/types';

const entriesMock: GlucoseMeasurementsType[] = new Array(50).map((item, index) => ({
  carbohydrateCounting: '228 mg',
  date: Date.now(),
  glucoseLevel: '123',
  id: String(index),
}));

export const GlucoseMeasurements: React.FC = () => {
  return (
    <div>
      <p>Glucose page</p>
      <GlucoseMeasurementsList entries={entriesMock} />
    </div>
  );
};
