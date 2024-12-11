import { render } from '@testing-library/react';
import { ConnectionStatusCell } from './ConnectionStatusCell';
import { ConnectionStatus } from '@/models/ConnectionStatus';

const connectionStatus: ConnectionStatus = ConnectionStatus.Online;

describe('ConnectionStatusCell', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ConnectionStatusCell connectionStatus={connectionStatus} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
