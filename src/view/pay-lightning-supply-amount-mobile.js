import React from 'react';
import { StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Background from '../component/background';
import MainContent from '../component/main-content';
import { NamedField, AmountInputField } from '../component/field';
import { Header, Title } from '../component/header';
import { CancelButton, BackButton, SmallGlasButton } from '../component/button';
import Card from '../component/card';
import LightningBoltIcon from '../asset/icon/lightning-bolt';
import { FormStretcher } from '../component/form';
import { BalanceLabel, BalanceLabelUnit } from '../component/label';
import { color } from '../component/style';

const styles = StyleSheet.create({
  balance: {
    marginBottom: 10,
  },
  numeral: {
    color: color.blackText,
  },
  unit: {
    color: color.blackText,
  },
  totalLbl: {
    marginTop: 5,
  },
  note: {
    marginTop: 5,
    borderBottomWidth: 0,
  },
  confirmBtn: {
    marginTop: 20,
  },
});

const PayLightningSupplyAmountView = ({ store, nav, payment }) => (
  <Background color={color.purple}>
    <Header color={color.purple}>
      <BackButton onPress={() => nav.goPay()} />
      <Title title="Supply Lightning Payment Amount">
        <LightningBoltIcon height={12} width={6.1} />
      </Title>
      <CancelButton onPress={() => nav.goHome()} />
    </Header>
    <MainContent>
      <Card>
        <FormStretcher>
          <BalanceLabel style={styles.balance}>
            <AmountInputField
              style={styles.amountInput}
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
          {store.payment.note ? (
            <NamedField name="Note" style={styles.note}>
              {store.payment.note}
            </NamedField>
          ) : null}
        </FormStretcher>
      </Card>
    </MainContent>
    <SmallGlasButton onPress={() => nav.goPayLightningConfirm()}>
      Confirm
    </SmallGlasButton>
  </Background>
);

PayLightningSupplyAmountView.propTypes = {
  store: PropTypes.object.isRequired,
  nav: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired,
};

export default observer(PayLightningSupplyAmountView);
