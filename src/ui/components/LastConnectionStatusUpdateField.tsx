import { getLocaleString } from '@/lib/dateTime';
import { Typography } from '@mui/material';

interface LastConnectionStatusUpdateFieldProps {
  timestamp: string;
}

export function LastConnectionStatusUpdateField({
  timestamp,
}: LastConnectionStatusUpdateFieldProps) {
  return (
    <Typography
      display="flex"
      alignItems="center"
      height="100%"
      fontSize="medium"
    >
      {getLocaleString(timestamp)}
    </Typography>
  );
}
