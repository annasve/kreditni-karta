import { useState, useRef, useEffect } from 'react';

interface CardInputsState {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
}

export const CardInputs = () => {
  const [cardInputs, setCardInputs] = useState<CardInputsState>({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  });

  const validateInputs = (curInput: string) => {
    //console.log(Number.isNaN(Number(curInput)), curInput); // it works
    //console.log(Number.isNaN(curInput), 'version2'); //does not work
    if (Number(curInput) <= -1 || Number.isNaN(Number(curInput))) {
      alert('Zadávejte pouze číslice 0-9.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateInputs(e.target.value);
    setCardInputs({ ...cardInputs, [e.target.name]: e.target.value });
  };

  const cardInput2Ref = useRef<HTMLInputElement>(null!);
  const cardInput3Ref = useRef<HTMLInputElement>(null!);
  const cardInput4Ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (
      cardInputs.input1.length === 4 &&
      document.activeElement !== cardInput2Ref.current
    ) {
      cardInput2Ref.current.focus();
    }
    if (
      cardInputs.input2.length === 4 &&
      document.activeElement !== cardInput3Ref.current
    ) {
      cardInput3Ref.current.focus();
    }
    if (
      cardInputs.input3.length === 4 &&
      document.activeElement !== cardInput4Ref.current
    ) {
      cardInput4Ref.current.focus();
    }
  }, [cardInputs]);

  return (
    <section>
      <h2>card inputs</h2>
      <p>Zadejte číslo karty</p>
      <input
        value={cardInputs.input1}
        name="input1"
        maxLength={4}
        type="text"
        inputMode="numeric"
        onChange={handleChange}
        size={4}
      />
      <input
        value={cardInputs.input2}
        name="input2"
        maxLength={4}
        type="text"
        onChange={handleChange}
        ref={cardInput2Ref}
        size={4}
      />
      <input
        value={cardInputs.input3}
        name="input3"
        maxLength={4}
        type="text"
        onChange={handleChange}
        ref={cardInput3Ref}
        size={4}
      />
      <input
        value={cardInputs.input4}
        name="input4"
        maxLength={4}
        type="text"
        onChange={handleChange}
        ref={cardInput4Ref}
        size={4}
      />
    </section>
  );
};
