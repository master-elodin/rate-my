import * as React from 'react';
import './Submit.css';

const Submit = () => {
  const [data, setData] = React.useState({});

  const onSubmit = () => {
    console.log(data);
  }

  const updateData = (fieldName, fieldValue) => setData({...data, [fieldName]: fieldValue});

  return (
    <div className={'submit'}>
      <div className={'submit__form'}>
        <div className={'submit__row'}>
          <h4>01. Name</h4>
          <input type={'text'} placeholder={'Enter name'} autoFocus={true}
                 onChange={e => updateData('name', e.target.value)}/>
        </div>
        <div className={'submit__row'}>
          <h4>02. Show Name</h4>
          <input type={'text'} placeholder={'Enter show name'} autoFocus={true}
                 onChange={e => updateData('showName', e.target.value)}/>
        </div>
        <div className={'submit__row'}>
          <h4>03. Position</h4>
          <input type={'text'} placeholder={'Enter position'} autoFocus={true}
                 onChange={e => updateData('position', e.target.value)}/>
        </div>
        <div className={'submit__row'}>
          <h4>04. Rate them</h4>
          {[1, 2, 3].map(rating => (
            <label key={rating}>
              <input type={'radio'} checked={data.rating === rating} onChange={() => updateData('rating', rating)}/>
              {rating}
            </label>
          ))}
        </div>
        <div className={'submit__row'}>
          <h4>05. Would you work with them again?</h4>
          {['No way', 'Yes'].map(val => (
            <label key={val}>
              <input type={'radio'} checked={data.workWithAgain === val} onChange={() => updateData('workWithAgain', val)}/>
              {val}
            </label>
          ))}
        </div>
        <div className={'submit__row'}>
          <h4>06. Have you been sexually harassed by them?</h4>
          {['No', 'Yes'].map(val => (
            <label key={val}>
              <input type={'radio'} checked={data.harassed === val} onChange={() => updateData('harassed', val)}/>
              {val}
            </label>
          ))}
          <textarea placeholder={'Add more details'} onChange={e => updateData('harassedDetails', e.currentTarget.value)} />
        </div>
        <div className={'submit__row'}>
          <h4>07. Are they safe?</h4>
          {['Nope', 'Yes'].map(val => (
            <label key={val}>
              <input type={'radio'} checked={data.safe === val} onChange={() => updateData('safe', val)}/>
              {val}
            </label>
          ))}
          <textarea placeholder={'Specific safety concerns?'} onChange={e => updateData('safeDetails', e.currentTarget.value)} />
        </div>
        <div className={'submit__row'}>
          <h4>08. Your department</h4>
          <select onChange={e => updateData('department', e.currentTarget.value)} value={data.department}>
            {['Department 1','Department 2','Department 3','Department 4'].map(dep =>
              <option key={dep} value={dep}>{dep}</option>)}
          </select>
        </div>
        <div className={'submit__row'}>
          <h4>09. Additional thoughts</h4>
          <textarea placeholder={'What\'s on your mind?'} onChange={e => updateData('freeformThoughts', e.currentTarget.value)} />
        </div>
        <div className={'submit__footer'}>
          <button type={'submit'} onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Submit;