import styles from 'common/styles';
import React, { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../Icon';

type ModalType = {
  flex: number;
  toggleSheet: (args?: any) => void;
  handleAdd: () => void;
  isOpen: boolean;
  showAddBtn: boolean;
  children: ReactNode;
} & any;

const BottomSheet = ({
  flex,
  toggleSheet,
  handleAdd,
  showAddBtn,
  isOpen,
  children,
}: ModalType) => {
  const { absoluteFill } = StyleSheet;
  return isOpen ? (
    <TouchableOpacity
      style={[style.container, absoluteFill]}
      onPress={toggleSheet}
      activeOpacity={1}
    >
      {!showAddBtn ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={style.addBtn}
          onPress={handleAdd}
        >
          <Icon name="plus" color="black" />
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity
        style={[style.modalContainer, { flex }]}
        activeOpacity={1}
      >
        {children}
      </TouchableOpacity>
    </TouchableOpacity>
  ) : null;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0,0.3)',
  },
  modalContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'space-between',
  },
  image: { width: '100%', height: 200, borderRadius: 15 },
  bannerContainer: {
    ...styles.rowBetween,
    width: '100%',
    borderRadius: 12,
    borderColor: 'rgba(164, 186, 222,.3)',
    borderWidth: 1.5,
    shadowColor: 'rgba(164, 186, 222,.2)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  bannerMiddle: {
    borderStartColor: 'rgba(164, 186, 222,.5)',
    borderStartWidth: 1,
    borderEndColor: 'rgba(164, 186, 222,.5)',
    borderEndWidth: 1,
    paddingHorizontal: 10,
    width: '55%',
  },
  bannerMiddleTitle: { fontWeight: '700', marginBottom: 6, color: 'black' },
  bannerMiddleDesc: { color: 'gray', fontWeight: '600', maxWidth: 180 },
  btnContainer: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 15,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
  addBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: 10,
    marginRight: 5,
    padding: 15,
    alignSelf: 'flex-end',
    backgroundColor: 'white',
  },
});

export default BottomSheet;
