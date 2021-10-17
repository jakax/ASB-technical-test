import React, { useState } from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { StyledCard } from './Card.styled';

const Card = () => {

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCVC] = useState('');
    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

    function validateFormComplete() {
        return (!meta.error)
    }

    function handleSubmitCard() {
        console.log(`Card Number: ${cardNumber} \nDate Expiry: ${expiryDate} \nCVC: ${cvc}`);
    }

    function handleCardNumber(value) {
        getCardNumberProps(value);
        setCardNumber(value);
    }

    

    return (
        <StyledCard>
            <Form>
                <Row>
                    <input {...getCardNumberProps({ onChange: (e) => setCardNumber(e.target.value) })} value={cardNumber} />
                </Row><br />
                <Row>
                    <input {...getExpiryDateProps({ onChange: (e) => setExpiryDate(e.target.value) })} value={expiryDate} />
                    <input {...getCVCProps({ onChange: (e) => setCVC(e.target.value) })} value={cvc} />
                </Row><br />
                {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                <br /><br />
                <Row>
                    <Button variant='primary' disabled={!validateFormComplete()} onClick={handleSubmitCard}>
                        Save
                    </Button>
                </Row>
            </Form>
        </StyledCard>
    )
}

export default Card;