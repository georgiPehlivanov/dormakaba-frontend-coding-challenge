import { render } from '@testing-library/react';
import { LastConnectionStatusUpdateField } from './LastConnectionStatusUpdateField';

const timestamp = '2023-02-22T21:05:12.721Z';

describe('DoorList', () => {
  it('should render correctly', () => {
    const { container } = render(
      <LastConnectionStatusUpdateField timestamp={timestamp} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
