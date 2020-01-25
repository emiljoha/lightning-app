import React from 'react';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Background from '../component/background';
import MainContent from '../component/main-content';
import { NamedField, AmountInputField } from '../component/field';
import { Header, Title } from '../component/header';
import {
  MaxButton,
  CancelButton,
  BackButton,
  PillButton,
} from '../component/button';
import Card from '../component/card';
import LightningBoltIcon from '../asset/icon/lightning-bolt';
import { FormStretcher, FormText } from '../component/form';
import { BalanceLabel, BalanceLabelUnit } from '../component/label';
import { color } from '../component/style';

const styles = StyleSheet.create({
  description: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  unit: {
    color: color.blackText,
  },
  maxBtn: {
    marginTop: 10,
    marginBottom: 20,
  },
  nextBtn: {
    marginTop: 20,
    backgroundColor: color.purple,
  },
});

const PayLightningSupplyAmountView = ({ store, nav, payment }) => (
  <Background image="purple-gradient-bg">
    <Header color={color.purple}>
      <BackButton onPress={() => nav.goHome()} />
      <Title title="Specify Amount to Send">
        <LightningBoltIcon height={12} width={6.1} />
      </Title>
      <CancelButton onPress={() => nav.goHome()} />
    </Header>
    <MainContent>
      <Card>
        <FormText style={styles.description}>
          The invoice did not specify an amount.
        </FormText>
        <FormStretcher>
          <BalanceLabel style={styles.balance}>
            <AmountInputField
              autoFocus={true}
              value={store.payment.amount}
              onChangeText={amount => payment.setAmount({ amount })}
              onSubmitEditing={() =>
                payment.estimateLightningFeeForAmount(payment.amount)
              }
            />
            <BalanceLabelUnit style={styles.unit}>
              {store.unitFiatLabel}
            </BalanceLabelUnit>
          </BalanceLabel>
          <MaxButton
            style={styles.maxBtn}
            active={store.payment.sendAll}
            onPress={() => payment.toggleMax()}
          />
          {store.payment.note ? (
            <NamedField name="Note" style={styles.note}>
              {store.payment.note}
            </NamedField>
          ) : null}
        </FormStretcher>
        <PillButton
          style={styles.nextBtn}
          onPress={() => nav.goPayLightningConfirm()}
        >
          Pay
        </PillButton>
      </Card>
    </MainContent>
  </Background>
);

PayLightningSupplyAmountView.propTypes = {
  store: PropTypes.object.isRequired,
  nav: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired,
};

export default observer(PayLightningSupplyAmountView);
