import React from 'react';
import './style.css';
import { getInitials } from './utils/utils.js';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faIdCard,
  faBars,
  faPhone,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
const CardWrapper = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 1px 1px 5px #cdcdcd;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 24px auto;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 45%;
    display: inline-flex;
    margin: 0 40px 30px 40px;
    height:400px
  }
`;
const ImageSection = styled.div`
  background: linear-gradient(135deg, #f395ba 0%, #fed182 100%);
  border-radius: 16px 16px 0px 0px;
  text-align: center;
  padding: 2rem;
  align-items: center;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 2rem 5rem;
    border-radius: 16px 0px 0px 16px;
  }
`;
const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`;
const Initials = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  font-size: 55px;
`;
const DetailSection = styled.div`
  padding: 0px 40px 40px 40px;
`;
const InfoWrapper = styled.p`
  display: flex;
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  color: #000;
`;
const Anchor = styled.a`
  color: #3ab6ff;
  text-decoration: none;
  font-size: 1rem;
`;
const CompanyInfo = styled.div`
  padding: 0.9rem 0px 0px 0px;
`;
const CompanyName = styled.h3`
  font-size: 22px;
  color: #353535;
  font-family: Arial;
`;

const CompanyMoto = styled.p`
  font-style: italic;
`;
export default function Card({ user, cardHandler }) {
  const {
    name,
    email,
    image,
    phone,
    website,
    address: { street, suite, city, zipcode },
    company: { name: companyName, catchPhrase }
  } = user;

  return (
    <CardWrapper onClick={() => cardHandler(user)}>
      <ImageSection>
        {image ? (
          <Image src={image} alt="user profile photo" />
        ) : (
          <Initials>{getInitials(name)}</Initials>
        )}
      </ImageSection>
      <DetailSection>
        <h1>{name}</h1>
        <InfoWrapper>
          <Icon icon={faBars} size={'1x'} /> {email}
        </InfoWrapper>
        <InfoWrapper>
          <Icon icon={faIdCard} size={'1x'} /> {street}, {suite}, {city},{' '}
          {zipcode}
        </InfoWrapper>
        <InfoWrapper>
          {' '}
          <Icon icon={faPhone} size={'1x'} />
          {phone}
        </InfoWrapper>
        <Anchor href={`https://${website}`}>
          {' '}
          <Icon icon={faGlobe} size={'1x'} /> {website}
        </Anchor>
        <CompanyInfo>
          <CompanyName>{companyName}</CompanyName>
          <CompanyMoto>{catchPhrase}</CompanyMoto>
        </CompanyInfo>
      </DetailSection>
    </CardWrapper>
  );
}
