import { render } from '@testing-library/react';
import { ConnectionStatusCell } from './ConnectionStatusCell';
import { ConnectionStatus } from '@/models/ConnectionStatus';

describe('ConnectionStatusCell', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ConnectionStatusCell connectionStatus={ConnectionStatus.Online} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
