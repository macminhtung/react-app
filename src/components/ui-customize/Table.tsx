import {
  useCallback,
  useState,
  type ReactNode,
  Dispatch,
  SetStateAction,
  ComponentProps,
} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Checkbox,
} from '@/components/ui';
import { type CheckedState } from '@radix-ui/react-checkbox';
import { Loader2 } from 'lucide-react';
import { PaginationC } from '@/components/ui-customize';
import { cn } from '@/lib/utils';

export type THeader<K extends string> = {
  key: K;
  title?: ReactNode;
  width?: string | number;
};

export type TTableCProps<K extends string> = {
  headers: THeader<K>[];
  rowRecords: Record<K, string | number>[];
  rowKey: K;
  className?: string;
  loading?: boolean;
  pagination?: ComponentProps<typeof PaginationC>;
  selectMode?: {
    selectedRecords: Record<K, string | number>[];
    setSelectedRecords: Dispatch<SetStateAction<Record<K, string | number>[]>>;
  };
};

export const TableC = <K extends string>(props: TTableCProps<K>) => {
  const { headers, rowRecords, className, pagination, loading, rowKey, selectMode } = props;
  const [checkedAllState, setCheckedAllState] = useState<CheckedState>(false);

  // ==> ON SELECT ALL <==
  const onSelectAll = useCallback(() => {
    if (selectMode) {
      // Select all records
      if (checkedAllState === 'indeterminate' || !checkedAllState) {
        setCheckedAllState(true);
        selectMode.setSelectedRecords(rowRecords);
      }

      // Deselect all records
      else {
        setCheckedAllState(false);
        selectMode.setSelectedRecords([]);
      }
    }
  }, [checkedAllState, selectMode, rowRecords]);

  // ==> ON SELECT ROW <==
  const onSelectRow = useCallback(
    (checked: CheckedState, record: Record<K, string | number>) => {
      if (selectMode) {
        selectMode.setSelectedRecords((prev) => {
          // Update selected records
          const newSelectedRecord = checked
            ? [...prev, record]
            : prev.filter((i) => i[rowKey] !== record[rowKey]);

          // Update select all state
          if (newSelectedRecord.length === rowRecords.length) setCheckedAllState(true);
          else if (newSelectedRecord.length) setCheckedAllState('indeterminate');
          else setCheckedAllState(false);

          return newSelectedRecord;
        });
      }
    },
    [selectMode, rowKey, rowRecords.length]
  );

  return (
    <div className={cn('grid w-full [&>div]:border [&>div]:rounded relative', className)}>
      {loading && (
        <div className='absolute z-10 bg-gray-200 opacity-40 size-full flex items-center justify-center'>
          <Loader2 className={cn('animate-spin text-gray-700')} size={40} />
        </div>
      )}
      <Table>
        <TableHeader className='h-12'>
          <TableRow className='[&>*]:whitespace-nowrap sticky top-0 !bg-background shadow z-10'>
            {headers.map((item, idx) => (
              <TableHead
                key={`${idx}-${item.key}`}
                className={cn(!idx ? 'pl-4' : undefined)}
                style={{ width: item.width || 'auto' }}
              >
                {selectMode && item.key === rowKey && (
                  <Checkbox
                    className='mr-2 '
                    checked={checkedAllState}
                    onCheckedChange={onSelectAll}
                  />
                )}
                {item.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className='overflow-hidden'>
          {rowRecords.map((record, idxR) => (
            <TableRow key={`${idxR}`} className='odd:bg-muted/50 [&>*]:whitespace-nowrap h-11'>
              {headers.map((header, idxH) => (
                <TableCell className={!idxH ? 'pl-4' : undefined} key={header.key}>
                  {selectMode && header.key === rowKey && (
                    <Checkbox
                      className='mr-2'
                      checked={
                        !!selectMode.selectedRecords.find((i) => i[rowKey] === record[rowKey])
                      }
                      onCheckedChange={(checked) => onSelectRow(checked, record)}
                    />
                  )}
                  {record[header.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {pagination && <PaginationC {...pagination} />}
    </div>
  );
};
