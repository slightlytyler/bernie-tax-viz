import { casesById } from './cases';

const defaultCase = 'custom';

export default {
  inputs: casesById[defaultCase],
  userCase: defaultCase,
};
