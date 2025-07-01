import { FC, memo } from 'react';
import styled from 'styled-components';
import { BasePanel } from '../atoms/BasePanel';

type Props = {
  action: (num: number) => void;
};

export const PanelScreen: FC<Props> = memo((props) => {
  const { action } = props;
  return (
    <div>
      <p>I have seen it...</p>
      <Panels>
        <BasePanel
          panelNum={1}
          action={() => {
            action(1);
          }}
        />
        <BasePanel
          panelNum={2}
          action={() => {
            action(2);
          }}
        />
        <BasePanel
          panelNum={3}
          action={() => {
            action(3);
          }}
        />
        <BasePanel
          panelNum={4}
          action={() => {
            action(4);
          }}
        />
        <BasePanel
          panelNum={5}
          action={() => {
            action(5);
          }}
        />
        <BasePanel
          panelNum={6}
          action={() => {
            action(6);
          }}
        />
        <BasePanel
          panelNum={7}
          action={() => {
            action(7);
          }}
        />
        <BasePanel
          panelNum={8}
          action={() => {
            action(8);
          }}
        />
        <BasePanel
          panelNum={9}
          action={() => {
            action(9);
          }}
        />
        <BasePanel
          panelNum={10}
          action={() => {
            action(10);
          }}
        />
        <BasePanel
          panelNum={11}
          action={() => {
            action(11);
          }}
        />
        <BasePanel
          panelNum={12}
          action={() => {
            action(12);
          }}
        />
        <BasePanel
          panelNum={13}
          action={() => {
            action(13);
          }}
        />
        <BasePanel
          panelNum={14}
          action={() => {
            action(14);
          }}
        />
        <BasePanel
          panelNum={15}
          action={() => {
            action(15);
          }}
        />
        <BasePanel
          panelNum={16}
          action={() => {
            action(16);
          }}
        />
        <BasePanel
          panelNum={17}
          action={() => {
            action(17);
          }}
        />
        <BasePanel
          panelNum={18}
          action={() => {
            action(18);
          }}
        />
        <BasePanel
          panelNum={19}
          action={() => {
            action(19);
          }}
        />
        <BasePanel
          panelNum={20}
          action={() => {
            action(20);
          }}
        />
        <BasePanel
          panelNum={21}
          action={() => {
            action(21);
          }}
        />
        <BasePanel
          panelNum={22}
          action={() => {
            action(22);
          }}
        />
        <BasePanel
          panelNum={23}
          action={() => {
            action(23);
          }}
        />
        <BasePanel
          panelNum={24}
          action={() => {
            action(24);
          }}
        />
        <BasePanel
          panelNum={25}
          action={() => {
            action(25);
          }}
        />
      </Panels>
    </div>
  );
});

const Panels = styled.div`
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  gap: 0px;
  justify-content: center;
`;
