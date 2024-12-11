import { ConnectionStatus } from '@/models/ConnectionStatus';
import { Typography } from '@mui/material';

interface ConnectionStatusCellProps {
  connectionStatus: ConnectionStatus;
}

export function ConnectionStatusCell({
  connectionStatus,
}: ConnectionStatusCellProps) {
  const isOnline = connectionStatus === ConnectionStatus.Online;

  return (
    <Typography
      component="span"
      color={isOnline ? 'success.main' : 'error.main'}
    >
      {connectionStatus}
    </Typography>
  );
}
