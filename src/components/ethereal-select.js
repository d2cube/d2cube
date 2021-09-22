import Select from './ui/select.js';

const EtherealSelect = ({value, onChange}) => (
  <Select
    options={options}
    placeholder="Modify Ethereal Property"
    value={value}
    onChange={onChange}
  />
);

const options = [
  {value: null, label: 'None'},
  {value: 'ethereal', label: 'Ethereal'},
  {value: 'ethereal bugged', label: 'Ethereal Bugged'},
];

export default EtherealSelect;
