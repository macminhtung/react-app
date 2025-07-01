/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: any; output: any; }
};

export type AddPaymentMethodDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId: Scalars['String']['input'];
};

export type AddressEntity = {
  businessCompanyId?: Maybe<Scalars['String']['output']>;
  cityName?: Maybe<Scalars['String']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  stateName?: Maybe<Scalars['String']['output']>;
  street: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  vendorId: Scalars['String']['output'];
};

export type AgentServiceEntity = {
  agentId: Scalars['String']['output'];
  airports?: Maybe<Array<AirportEntity>>;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: ECurrency;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fees?: Maybe<FeeAttributes>;
  id: Scalars['String']['output'];
  rates?: Maybe<Array<RateAttributes>>;
  rule?: Maybe<RuleAttributes>;
  serviceModel: EAgentServiceModel;
  serviceType: EFlightSegmentType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type AgentServiceHistoryDto = {
  currency: ECurrency;
  pricing: ServicePricingHistory;
  rule: RuleAttributes;
  serviceModel: EAgentServiceModel;
};

export type AgentServiceResponseDto = {
  agent: UserEntity;
  agentId: Scalars['String']['output'];
  airports: Array<AirportEntity>;
  category: CategoryEntity;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: ECurrency;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fees?: Maybe<FeeAttributes>;
  id: Scalars['String']['output'];
  rates?: Maybe<Array<RateAttributes>>;
  rule?: Maybe<RuleAttributes>;
  serviceModel: EAgentServiceModel;
  serviceType: EFlightSegmentType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type AgentServicesPaginationResponseDto = {
  data: Array<AgentServiceResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AgentToAssignRequestResponseDto = {
  available?: Maybe<Scalars['Boolean']['output']>;
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastname?: Maybe<Scalars['String']['output']>;
};

export type AgentWorkingScheduleEntity = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  fri: DayWorkingSchedule;
  id: Scalars['String']['output'];
  mon: DayWorkingSchedule;
  sat: DayWorkingSchedule;
  sun: DayWorkingSchedule;
  thu: DayWorkingSchedule;
  tue: DayWorkingSchedule;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId: Scalars['String']['output'];
  vendorId: Scalars['String']['output'];
  wed: DayWorkingSchedule;
};

export type Airline = {
  active: Scalars['Boolean']['output'];
  fs: Scalars['String']['output'];
  iata: Scalars['String']['output'];
  icao: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type AirlineAttributesDto = {
  airlineCode?: Maybe<Scalars['String']['output']>;
  airlineFsCode?: Maybe<Scalars['String']['output']>;
  airlineIataCode?: Maybe<Scalars['String']['output']>;
  baggageLink?: Maybe<Scalars['String']['output']>;
  checkinLink?: Maybe<Scalars['String']['output']>;
  termsOfCarriageLink?: Maybe<Scalars['String']['output']>;
};

export type AirlineInput = {
  active: Scalars['Boolean']['input'];
  fs: Scalars['String']['input'];
  iata: Scalars['String']['input'];
  icao: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type AirportEntity = {
  cityId?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  countryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AirportResponseDto = {
  airportServices?: Maybe<Array<AirportServiceResponseDto>>;
  city?: Maybe<CityEntity>;
  cityId?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  country?: Maybe<CountryEntity>;
  countryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  holidays?: Maybe<Array<HolidayEntity>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AirportServiceAttributesInput = {
  airportId: Scalars['String']['input'];
  cancelation?: InputMaybe<Array<CancelationInput>>;
  currency: ECurrency;
  description?: InputMaybe<Scalars['String']['input']>;
  fees?: InputMaybe<FeeAttributesInput>;
  highlights: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  primaryCategory: ECategory;
  primaryCategoryName: Scalars['String']['input'];
  rates: Array<RateAttributesInput>;
  referralAirportServiceSettings?: InputMaybe<AirportServiceSettingsInput>;
  rule: RuleAttributesInput;
  serviceModel?: EServiceModel;
  serviceType: EFlightSegmentType;
  timeLimit: TimeLimitAttributesInput;
};

export type AirportServiceEntity = {
  airportId: Scalars['String']['output'];
  cancelation?: Maybe<Array<Cancelation>>;
  createdAt: Scalars['DateTime']['output'];
  currency: ECurrency;
  customerContractId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fees: FeeAttributes;
  highlights?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  mappingAirportServiceId?: Maybe<Scalars['String']['output']>;
  mappingCategoryName?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  offereeCustomerId?: Maybe<Scalars['String']['output']>;
  offereeVendorId?: Maybe<Scalars['String']['output']>;
  primaryCategoryId: Scalars['String']['output'];
  primaryVendorId: Scalars['String']['output'];
  rates: Array<RateAttributes>;
  referralAirportServiceSettings?: Maybe<AirportServiceSettings>;
  rule: RuleAttributes;
  serviceModel: EServiceModel;
  serviceType: EFlightSegmentType;
  timeLimit: TimeLimitAttributes;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorContractId?: Maybe<Scalars['String']['output']>;
};

export type AirportServiceHistoryDto = {
  category: ECategory;
  categoryName: Scalars['String']['output'];
  currency: ECurrency;
  name: Scalars['String']['output'];
  pricing: ServicePricingHistory;
  rule: RuleAttributes;
  serviceModel: EServiceModel;
  timeLimit: TimeLimitAttributes;
};

export type AirportServiceResponseDto = {
  airport: AirportEntity;
  airportId: Scalars['String']['output'];
  cancelation?: Maybe<Array<Cancelation>>;
  createdAt: Scalars['DateTime']['output'];
  currency: ECurrency;
  customerContract?: Maybe<ContractResponseDto>;
  customerContractId?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fees: FeeAttributes;
  highlights?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  mappingAirportService?: Maybe<AirportServiceResponseDto>;
  mappingAirportServiceId?: Maybe<Scalars['String']['output']>;
  mappingCategoryName?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  offereeCustomerId?: Maybe<Scalars['String']['output']>;
  offereeVendor?: Maybe<VendorEntity>;
  offereeVendorId?: Maybe<Scalars['String']['output']>;
  primaryCategory: CategoryEntity;
  primaryCategoryId: Scalars['String']['output'];
  primaryVendor?: Maybe<PrimaryVendorDto>;
  primaryVendorId: Scalars['String']['output'];
  rates: Array<RateAttributes>;
  referralAirportServiceSettings?: Maybe<AirportServiceSettings>;
  rule: RuleAttributes;
  serviceModel: EServiceModel;
  serviceType: EFlightSegmentType;
  timeLimit: TimeLimitAttributes;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorContract?: Maybe<ContractResponseDto>;
  vendorContractId?: Maybe<Scalars['String']['output']>;
};

export type AirportServiceSettings = {
  cancelation?: Maybe<Array<Cancelation>>;
  description?: Maybe<Scalars['String']['output']>;
  fees?: Maybe<FeeAttributes>;
  highlights: Array<Scalars['String']['output']>;
  rates: Array<RateAttributes>;
  rule: RuleAttributes;
  timeLimit: TimeLimitAttributes;
};

export type AirportServiceSettingsInput = {
  cancelation?: InputMaybe<Array<CancelationInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fees?: InputMaybe<FeeAttributesInput>;
  highlights: Array<Scalars['String']['input']>;
  rates: Array<RateAttributesInput>;
  rule: RuleAttributesInput;
  timeLimit: TimeLimitAttributesInput;
};

export type AirportServicesPaginationResponseDto = {
  data: Array<AirportServiceResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AirportsPaginationResponseDto = {
  data: Array<AirportResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AlertEntity = {
  airline?: Maybe<AirlineAttributesDto>;
  alertSetting: Scalars['String']['output'];
  baggage?: Maybe<BaggageAttributesDto>;
  connectionTime?: Maybe<ConnectionAttributesTimeDto>;
  createdAt: Scalars['DateTime']['output'];
  dateTime: Scalars['String']['output'];
  delay?: Maybe<DelayAttributesDto>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  flightIndex?: Maybe<Scalars['Float']['output']>;
  gate?: Maybe<GateAttributesDto>;
  id: Scalars['String']['output'];
  inboundFlightIndex?: Maybe<Scalars['Float']['output']>;
  legIndex?: Maybe<Scalars['Float']['output']>;
  legs?: Maybe<Array<LegAttributesDto>>;
  minimumConnectTime?: Maybe<Scalars['Float']['output']>;
  minutesBeforeArrival?: Maybe<Scalars['Float']['output']>;
  minutesBeforeDeparture?: Maybe<Scalars['Float']['output']>;
  minutesLate?: Maybe<Scalars['Float']['output']>;
  outboundFlightIndex?: Maybe<Scalars['Float']['output']>;
  terminal?: Maybe<TerminalAttributesDto>;
  tripId: Scalars['String']['output'];
  type: EAlertType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  waiver?: Maybe<WaiverAttributesDto>;
};

export type AlertResponseDto = {
  airline?: Maybe<AirlineAttributesDto>;
  alertSetting: Scalars['String']['output'];
  baggage?: Maybe<BaggageAttributesDto>;
  connectionTime?: Maybe<ConnectionAttributesTimeDto>;
  createdAt: Scalars['DateTime']['output'];
  dateTime: Scalars['String']['output'];
  delay?: Maybe<DelayAttributesDto>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  flightIndex?: Maybe<Scalars['Float']['output']>;
  gate?: Maybe<GateAttributesDto>;
  id: Scalars['String']['output'];
  inboundFlightIndex?: Maybe<Scalars['Float']['output']>;
  legIndex?: Maybe<Scalars['Float']['output']>;
  legs?: Maybe<Array<LegAttributesDto>>;
  minimumConnectTime?: Maybe<Scalars['Float']['output']>;
  minutesBeforeArrival?: Maybe<Scalars['Float']['output']>;
  minutesBeforeDeparture?: Maybe<Scalars['Float']['output']>;
  minutesLate?: Maybe<Scalars['Float']['output']>;
  outboundFlightIndex?: Maybe<Scalars['Float']['output']>;
  terminal?: Maybe<TerminalAttributesDto>;
  trip: TripResponseDto;
  tripId: Scalars['String']['output'];
  type: EAlertType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  waiver?: Maybe<WaiverAttributesDto>;
};

export type AlertsPaginationResponseDto = {
  data: Array<AlertResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AppendixDto = {
  airlines: Array<Airline>;
};

export type ApprovedAgentWithdrawalDto = {
  approvedAgentId: Scalars['String']['input'];
  bookingItemId: Scalars['String']['input'];
  withdrawReason: Scalars['String']['input'];
};

export type ArrangeBookingItemChecklistsDto = {
  arrangeItems: Array<ArrangeItemDto>;
  bookingItemId: Scalars['String']['input'];
};

export type ArrangeItemDto = {
  id: Scalars['String']['input'];
  index: Scalars['Float']['input'];
};

export type ArrivalAttributesDto = {
  airportCode?: Maybe<Scalars['String']['output']>;
  airportFsCode?: Maybe<Scalars['String']['output']>;
  airportIataCode?: Maybe<Scalars['String']['output']>;
  dateTime?: Maybe<Scalars['String']['output']>;
};

export type ArrivalFlightStatusAttributesDto = {
  actualGateDateTime?: Maybe<Scalars['String']['output']>;
  actualRunwayDateTime?: Maybe<Scalars['String']['output']>;
  airportCode?: Maybe<Scalars['String']['output']>;
  airportFsCode?: Maybe<Scalars['String']['output']>;
  airportIataCode?: Maybe<Scalars['String']['output']>;
  estimatedGateDateTime?: Maybe<Scalars['String']['output']>;
  estimatedRunwayDateTime?: Maybe<Scalars['String']['output']>;
  gate?: Maybe<Scalars['String']['output']>;
  scheduledGateDateTime?: Maybe<Scalars['String']['output']>;
  scheduledRunwayDateTime?: Maybe<Scalars['String']['output']>;
  terminal?: Maybe<Scalars['String']['output']>;
};

export type AssignRequestEntity = {
  assignAgent: UserEntity;
  assignAgentId: Scalars['String']['output'];
  bookingItemId: Scalars['String']['output'];
  clockIn?: Maybe<Scalars['DateTime']['output']>;
  clockOut?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  status: EAssignRequestStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
  withdrawReason?: Maybe<Scalars['String']['output']>;
};

export type AssignRequestsResponseDto = {
  assignAgent: UserResponseDto;
  assignAgentId: Scalars['String']['output'];
  bookingItemId: Scalars['String']['output'];
  clockIn?: Maybe<Scalars['DateTime']['output']>;
  clockOut?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  status: EAssignRequestStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
  withdrawReason?: Maybe<Scalars['String']['output']>;
};

export type BaggageAttributesDto = {
  current?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
};

export type BookingEntity = {
  bookingPaymentStatus: EBookingPaymentStatus;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<ECurrency>;
  customerId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountId?: Maybe<Scalars['String']['output']>;
  displayId: Scalars['String']['output'];
  holdFundExpirationDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  passengerQuantity: Scalars['Float']['output'];
  paymentMethodInfo?: Maybe<PaymentMethodInfo>;
  total: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type BookingItemChecklistEntity = {
  bookingItemId: Scalars['String']['output'];
  checklistId?: Maybe<Scalars['Int']['output']>;
  checklistNoteId?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customChecklist?: Maybe<CustomChecklist>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  index: Scalars['Float']['output'];
  notApplicable: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type BookingItemChecklistResponseDto = {
  bookingItem: BookingItemEntity;
  bookingItemId: Scalars['String']['output'];
  checklistId?: Maybe<Scalars['Int']['output']>;
  checklistItem?: Maybe<ChecklistEntity>;
  checklistNote?: Maybe<BookingItemNoteEntity>;
  checklistNoteId?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customChecklist?: Maybe<CustomChecklist>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  index: Scalars['Float']['output'];
  notApplicable: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type BookingItemDetailResponseDto = {
  airportService?: Maybe<AirportServiceResponseDto>;
  airportServiceId: Scalars['String']['output'];
  approvedAgent?: Maybe<UserEntity>;
  approvedAgentId?: Maybe<Scalars['String']['output']>;
  arrivalDateTime?: Maybe<Scalars['DateTime']['output']>;
  arrivalFlightSchedule?: Maybe<FlightSchedule>;
  assignRequests?: Maybe<Array<AssignRequestsResponseDto>>;
  autoConfirmAssignRequest: Scalars['Boolean']['output'];
  autoConfirmTransferRequest: Scalars['Boolean']['output'];
  booking: BookingEntity;
  bookingId: Scalars['String']['output'];
  bookingItemChecklists: Array<BookingItemChecklistEntity>;
  bookingItemExpenses?: Maybe<Array<BookingItemExpenseEntity>>;
  childBookingItem?: Maybe<BookingItemResponseDto>;
  childBookingItemId?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  completedById?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<ECurrency>;
  customer: UserResponseDto;
  customerId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  departureDateTime?: Maybe<Scalars['DateTime']['output']>;
  departureFlightSchedule?: Maybe<FlightSchedule>;
  displayId: Scalars['String']['output'];
  emergencyContacts?: Maybe<Array<EmergencyContact>>;
  expiredReason?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  invoiceItem: InvoiceItemEntity;
  isViewed: Scalars['Boolean']['output'];
  lastChildBookingItem?: Maybe<BookingItemResponseDto>;
  lastChildBookingItemId?: Maybe<Scalars['String']['output']>;
  level: Scalars['Float']['output'];
  parentBookingItem?: Maybe<BookingItemResponseDto>;
  parentBookingItemId?: Maybe<Scalars['String']['output']>;
  passengers?: Maybe<Array<PassengerEntity>>;
  price: Scalars['Float']['output'];
  priceCalculationHistory: PriceCalculationHistoryDto;
  rating: Scalars['Float']['output'];
  rootBookingItem?: Maybe<BookingItemResponseDto>;
  rootBookingItemId?: Maybe<Scalars['String']['output']>;
  status: EBookingItemStatus;
  transactionId?: Maybe<Scalars['String']['output']>;
  transferRequests?: Maybe<Array<TransferRequestResponseDto>>;
  transportInformation?: Maybe<TransportInformation>;
  trip?: Maybe<TripResponseDto>;
  tripId?: Maybe<Scalars['String']['output']>;
  type: EFlightSegmentType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendor: VendorEntity;
  vendorId: Scalars['String']['output'];
  withdrawReason?: Maybe<Scalars['String']['output']>;
  withdrawnById?: Maybe<Scalars['String']['output']>;
  withdrawnParentBookingItem?: Maybe<BookingItemResponseDto>;
  withdrawnParentBookingItemId?: Maybe<Scalars['String']['output']>;
};

export type BookingItemEntity = {
  airportServiceId: Scalars['String']['output'];
  approvedAgentId?: Maybe<Scalars['String']['output']>;
  arrivalDateTime?: Maybe<Scalars['DateTime']['output']>;
  arrivalFlightSchedule?: Maybe<FlightSchedule>;
  autoConfirmAssignRequest: Scalars['Boolean']['output'];
  autoConfirmTransferRequest: Scalars['Boolean']['output'];
  bookingId: Scalars['String']['output'];
  childBookingItemId?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  completedById?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<ECurrency>;
  customerId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  departureDateTime?: Maybe<Scalars['DateTime']['output']>;
  departureFlightSchedule?: Maybe<FlightSchedule>;
  displayId: Scalars['String']['output'];
  emergencyContacts?: Maybe<Array<EmergencyContact>>;
  expiredReason?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isViewed: Scalars['Boolean']['output'];
  lastChildBookingItemId?: Maybe<Scalars['String']['output']>;
  level: Scalars['Float']['output'];
  parentBookingItemId?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  priceCalculationHistory: PriceCalculationHistoryDto;
  rating: Scalars['Float']['output'];
  rootBookingItemId?: Maybe<Scalars['String']['output']>;
  status: EBookingItemStatus;
  transactionId?: Maybe<Scalars['String']['output']>;
  transportInformation?: Maybe<TransportInformation>;
  tripId?: Maybe<Scalars['String']['output']>;
  type: EFlightSegmentType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
  withdrawReason?: Maybe<Scalars['String']['output']>;
  withdrawnById?: Maybe<Scalars['String']['output']>;
  withdrawnParentBookingItemId?: Maybe<Scalars['String']['output']>;
};

export type BookingItemExpenseEntity = {
  bookingItemId: Scalars['String']['output'];
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  createdByRole: EExpenseRole;
  currency?: Maybe<ECurrency>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  hours?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  noteId?: Maybe<Scalars['String']['output']>;
  passengers?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Float']['output'];
  rootExpenseId?: Maybe<Scalars['String']['output']>;
  type: ETypeExpense;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type BookingItemExpenseResponseDto = {
  bookingItem: BookingItemDetailResponseDto;
  bookingItemId: Scalars['String']['output'];
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  createdByRole: EExpenseRole;
  currency?: Maybe<ECurrency>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  hours?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  note?: Maybe<BookingItemNoteEntity>;
  noteId?: Maybe<Scalars['String']['output']>;
  passengers?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Float']['output'];
  rootExpenseId?: Maybe<Scalars['String']['output']>;
  type: ETypeExpense;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type BookingItemNoteEntity = {
  bookingItemId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  type: ENoteType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedById?: Maybe<Scalars['String']['output']>;
  vendorId: Scalars['String']['output'];
};

export type BookingItemNoteResponseDto = {
  bookingItem?: Maybe<BookingItemResponseDto>;
  bookingItemChecklist?: Maybe<BookingItemChecklistResponseDto>;
  bookingItemExpense?: Maybe<BookingItemExpenseResponseDto>;
  bookingItemId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: UserResponseDto;
  createdById: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  type: ENoteType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedBy?: Maybe<UserResponseDto>;
  updatedById?: Maybe<Scalars['String']['output']>;
  vendorId: Scalars['String']['output'];
};

export type BookingItemResponseDto = {
  airportService?: Maybe<AirportServiceResponseDto>;
  airportServiceId: Scalars['String']['output'];
  approvedAgent?: Maybe<UserEntity>;
  approvedAgentId?: Maybe<Scalars['String']['output']>;
  arrivalDateTime?: Maybe<Scalars['DateTime']['output']>;
  arrivalFlightSchedule?: Maybe<FlightSchedule>;
  assignRequests?: Maybe<Array<AssignRequestsResponseDto>>;
  autoConfirmAssignRequest: Scalars['Boolean']['output'];
  autoConfirmTransferRequest: Scalars['Boolean']['output'];
  booking: BookingEntity;
  bookingId: Scalars['String']['output'];
  bookingItemExpenses?: Maybe<Array<BookingItemExpenseEntity>>;
  childBookingItem?: Maybe<BookingItemResponseDto>;
  childBookingItemId?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  completedById?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<ECurrency>;
  customer?: Maybe<UserResponseDto>;
  customerId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  departureDateTime?: Maybe<Scalars['DateTime']['output']>;
  departureFlightSchedule?: Maybe<FlightSchedule>;
  displayId: Scalars['String']['output'];
  emergencyContacts?: Maybe<Array<EmergencyContact>>;
  expiredReason?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  invoiceItem?: Maybe<InvoiceItemEntity>;
  isViewed: Scalars['Boolean']['output'];
  lastChildBookingItemId?: Maybe<Scalars['String']['output']>;
  level: Scalars['Float']['output'];
  parentBookingItem?: Maybe<BookingItemResponseDto>;
  parentBookingItemId?: Maybe<Scalars['String']['output']>;
  passengers?: Maybe<Array<PassengerEntity>>;
  price: Scalars['Float']['output'];
  priceCalculationHistory: PriceCalculationHistoryDto;
  rating: Scalars['Float']['output'];
  rootBookingItemId?: Maybe<Scalars['String']['output']>;
  status: EBookingItemStatus;
  transactionId?: Maybe<Scalars['String']['output']>;
  transferRequests?: Maybe<Array<TransferRequestResponseDto>>;
  transportInformation?: Maybe<TransportInformation>;
  tripId?: Maybe<Scalars['String']['output']>;
  type: EFlightSegmentType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendor?: Maybe<VendorResponseDto>;
  vendorId: Scalars['String']['output'];
  withdrawReason?: Maybe<Scalars['String']['output']>;
  withdrawnById?: Maybe<Scalars['String']['output']>;
  withdrawnParentBookingItem?: Maybe<BookingItemResponseDto>;
  withdrawnParentBookingItemId?: Maybe<Scalars['String']['output']>;
};

export type BookingItemStatsResponseDto = {
  arrival: Scalars['Float']['output'];
  connection: Scalars['Float']['output'];
  departure: Scalars['Float']['output'];
  transferred: Scalars['Float']['output'];
  withdraw: Scalars['Float']['output'];
};

export type BookingItemsPaginationResponseDto = {
  data: Array<BookingItemDetailResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BusinessCompanyEntity = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  primaryContact?: Maybe<UserEntity>;
  primaryContactId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type BusinessCompanyResponseDto = {
  addresses: Array<AddressEntity>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  primaryContact?: Maybe<UserEntity>;
  primaryContactId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type Cancelation = {
  from: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
  type: EFeeType;
  value: Scalars['Float']['output'];
};

export type CancelationInput = {
  from: Scalars['Float']['input'];
  to: Scalars['Float']['input'];
  type: EFeeType;
  value: Scalars['Float']['input'];
};

export type CardAssignmentEntity = {
  brand: Scalars['String']['output'];
  businessCompanyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expMonth: Scalars['String']['output'];
  expYear: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  last4: Scalars['String']['output'];
  paymentMethodId: Scalars['String']['output'];
  providerName: EProviderName;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId: Scalars['String']['output'];
  vendorId: Scalars['String']['output'];
};

export type CardAssignmentsPaginationResponseDto = {
  data: Array<CardAssignmentEntity>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CategoriesResponseDto = {
  data: Array<CategoryEntity>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CategoryEntity = {
  category: ECategory;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type CheckExistCurrencyBySymbolDto = {
  symbols: Array<ECurrency>;
};

export type ChecklistEntity = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  flightSegmentType: EFlightSegmentType;
  id: Scalars['Int']['output'];
  instructions: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CitiesPaginationResponseDto = {
  data: Array<CityEntity>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CityEntity = {
  cityCode?: Maybe<Scalars['String']['output']>;
  cityName: Scalars['String']['output'];
  countryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ConfirmAccountDto = {
  token: Scalars['String']['input'];
};

export type ConnectionAttributesTimeDto = {
  current?: Maybe<Scalars['Float']['output']>;
  previous?: Maybe<Scalars['Float']['output']>;
};

export type ConnectionFlightDto = {
  flightNumber: Scalars['String']['input'];
};

export type ConnectionFlightRoute = {
  airlineName: Scalars['String']['output'];
  airplaneName?: Maybe<Scalars['String']['output']>;
  arrivalAirportFsCode: Scalars['String']['output'];
  arrivalAirportName: Scalars['String']['output'];
  arrivalAirportTimezone: Scalars['String']['output'];
  arrivalCity: Scalars['String']['output'];
  arrivalTerminal?: Maybe<Scalars['String']['output']>;
  arrivalTime?: Maybe<Scalars['String']['output']>;
  carrierFsCode: Scalars['String']['output'];
  departureAirportFsCode: Scalars['String']['output'];
  departureAirportName: Scalars['String']['output'];
  departureAirportTimezone: Scalars['String']['output'];
  departureCity: Scalars['String']['output'];
  departureTerminal?: Maybe<Scalars['String']['output']>;
  departureTime?: Maybe<Scalars['String']['output']>;
  flightNumber: Scalars['String']['output'];
  stops: Scalars['Int']['output'];
};

export type ContactTransportInformation = {
  driver?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type ContactTransportInformationInput = {
  driver?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type ContractAirportServicesDto = {
  airportServiceId: Scalars['String']['input'];
  mappingAirportServiceId: Scalars['String']['input'];
};

export type ContractEntity = {
  airportId: Scalars['String']['output'];
  autoRenewal: Scalars['Boolean']['output'];
  cancelationNotice: Scalars['Int']['output'];
  cancelationPenalty: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  offereeSignedUserId?: Maybe<Scalars['String']['output']>;
  offereeVendorId?: Maybe<Scalars['String']['output']>;
  offerorSignedUserId?: Maybe<Scalars['String']['output']>;
  offerorVendorId: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  status: EContractStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContractResponseDto = {
  airport: AirportEntity;
  airportId: Scalars['String']['output'];
  autoRenewal: Scalars['Boolean']['output'];
  cancelationNotice: Scalars['Int']['output'];
  cancelationPenalty: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  endDate: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  offereeSignedUser?: Maybe<UserEntity>;
  offereeSignedUserId?: Maybe<Scalars['String']['output']>;
  offereeVendor?: Maybe<VendorEntity>;
  offereeVendorId?: Maybe<Scalars['String']['output']>;
  offerorSignedUser?: Maybe<UserEntity>;
  offerorSignedUserId?: Maybe<Scalars['String']['output']>;
  offerorVendor: VendorEntity;
  offerorVendorId: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
  status: EContractStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorAirportServices?: Maybe<Array<AirportServiceResponseDto>>;
};

export type ContractsPaginationResponseDto = {
  data: Array<ContractResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CountriesPaginationResponseDto = {
  data: Array<CountryEntity>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CountryEntity = {
  countryCode: Scalars['String']['output'];
  countryName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CreateAddressDto = {
  addressType?: InputMaybe<EAddressType>;
  cityName?: InputMaybe<Scalars['String']['input']>;
  countryName: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  stateName?: InputMaybe<Scalars['String']['input']>;
  street: Scalars['String']['input'];
};

export type CreateAgentServiceDto = {
  agentId: Scalars['String']['input'];
  airportIds: Array<Scalars['String']['input']>;
  category: ECategory;
  categoryName: Scalars['String']['input'];
  currency: ECurrency;
  fees?: InputMaybe<FeeAttributesInput>;
  rates?: InputMaybe<Array<RateAttributesInput>>;
  rule?: InputMaybe<RuleAttributesInput>;
  serviceModel: EAgentServiceModel;
  serviceType: EFlightSegmentType;
};

export type CreateAirportServicesDto = {
  airportServices: Array<AirportServiceAttributesInput>;
  contractId?: InputMaybe<Scalars['String']['input']>;
  offereeCustomerId?: InputMaybe<Scalars['String']['input']>;
  offereeVendorId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAssignRequestsDto = {
  assignedAgentIds: Array<Scalars['String']['input']>;
  autoConfirmAssignRequest: Scalars['Boolean']['input'];
  bookingItemId: Scalars['String']['input'];
};

export type CreateBookingDto = {
  bookingItems: Array<CreateBookingItemDto>;
  company?: InputMaybe<CreateBusinessCompanyWithOutEmailDto>;
  companyAddress?: InputMaybe<CreateAddressDto>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  discountId?: InputMaybe<Scalars['String']['input']>;
  emergencyContacts?: InputMaybe<Array<EmergencyContactInput>>;
  flightScheduleIds?: InputMaybe<Array<Scalars['String']['input']>>;
  passengers: Array<CreatePassengerDto>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  requestQuotes?: InputMaybe<Array<RequestQuoteAttributesDto>>;
  transportInformation?: InputMaybe<TransportInformationInput>;
  unregisteredCustomer?: InputMaybe<RegisterCustomerDto>;
};

export type CreateBookingItemChecklistDto = {
  bookingItemId: Scalars['String']['input'];
  checklistId?: InputMaybe<Scalars['Float']['input']>;
  customChecklist?: InputMaybe<CustomChecklistDto>;
};

export type CreateBookingItemDto = {
  airportFsCode: Scalars['String']['input'];
  airportServiceId: Scalars['String']['input'];
  arrivalFlightInfo?: InputMaybe<ManualFlightInfoDto>;
  departureFlightInfo?: InputMaybe<ManualFlightInfoDto>;
  segmentType: EFlightSegmentType;
};

export type CreateBookingItemExpenseDto = {
  bookingItemId: Scalars['String']['input'];
  hours?: InputMaybe<Scalars['Float']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  note?: InputMaybe<Scalars['String']['input']>;
  passengers?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Float']['input'];
  type: ETypeExpense;
};

export type CreateBusinessCompanyDto = {
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBusinessCompanyWithOutEmailDto = {
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCardAssignmentDto = {
  paymentMethodId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateCategoryDto = {
  category: ECategory;
  name: Scalars['String']['input'];
};

export type CreateContractDto = {
  airportId: Scalars['String']['input'];
  autoRenewal?: InputMaybe<Scalars['Boolean']['input']>;
  cancelationNotice: Scalars['Int']['input'];
  cancelationPenalty: Scalars['Int']['input'];
  endDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
};

export type CreateCredentialDto = {
  aad: Scalars['String']['input'];
  authTag: Scalars['String']['input'];
  cacheKey: Scalars['String']['input'];
  ciphertext: Scalars['String']['input'];
  clientECDHPublicKey: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  initVector: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  providerName: EProviderName;
};

export type CreateCustomNoteDto = {
  bookingItemId: Scalars['String']['input'];
  note: Scalars['String']['input'];
};

export type CreateDiscountDto = {
  allowUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  code: Scalars['String']['input'];
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  maxUseQuantity?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  percent?: InputMaybe<Scalars['Float']['input']>;
  range: EDiscountRange;
  startedAt: Scalars['DateTime']['input'];
  type: EDiscountType;
};

export type CreateExchangeRatesDto = {
  currencies: Array<CreateExchangeRateyDto>;
};

export type CreateExchangeRateyDto = {
  rate: Scalars['Float']['input'];
  symbol: ECurrency;
};

export type CreateHolidayDto = {
  airportIds?: InputMaybe<Array<Scalars['String']['input']>>;
  belongToCountryId?: InputMaybe<Scalars['String']['input']>;
  cityIds?: InputMaybe<Array<Scalars['String']['input']>>;
  countryIds?: InputMaybe<Array<Scalars['String']['input']>>;
  coverageLevel: ECoverageLevel;
  description?: InputMaybe<Scalars['String']['input']>;
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  isAnnual: Scalars['Boolean']['input'];
  isRange: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateInvoiceDto = {
  invoiceItemIds: Array<Scalars['String']['input']>;
  invoiceMessage?: InputMaybe<Scalars['String']['input']>;
  paymentInfo?: InputMaybe<Scalars['String']['input']>;
  paymentMethod: EPaymentMethodType;
  receiverVendorId?: InputMaybe<Scalars['String']['input']>;
  type: EInvoiceType;
};

export type CreatePassengerDto = {
  alias?: InputMaybe<Scalars['String']['input']>;
  carryOnLuggage?: InputMaybe<Scalars['Int']['input']>;
  checkedLuggage?: InputMaybe<Scalars['Int']['input']>;
  classOfService?: InputMaybe<EClassOfService>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  flightReservationNumber?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  noShow?: InputMaybe<Scalars['Boolean']['input']>;
  specialServices?: InputMaybe<Array<SpecialServices>>;
  specificLanguage?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateRequestQuotesDto = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  requestQuotes: Array<RequestQuoteAttributesDto>;
};

export type CreateTransferRequestsDto = {
  autoConfirmTransferRequest: Scalars['Boolean']['input'];
  bookingItemId: Scalars['String']['input'];
  transferAirportServiceIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateUserInvitationsDto = {
  emails: Array<Scalars['String']['input']>;
  roleId: ERoleTypes;
};

export type CurrenciesDataResponseDto = {
  abbreviation: ECurrency;
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
};

export type CustomChecklist = {
  instructions: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CustomChecklistDto = {
  instructions: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CustomerWithdrawBookingItemDto = {
  id: Scalars['String']['input'];
  withdrawReason?: InputMaybe<Scalars['String']['input']>;
};

export type DayWorkingSchedule = {
  end: Scalars['Float']['output'];
  start: Scalars['Float']['output'];
};

export type DayWorkingScheduleInput = {
  end: Scalars['Float']['input'];
  start: Scalars['Float']['input'];
};

export type DelayAttributesDto = {
  current?: Maybe<Scalars['Float']['output']>;
  previous?: Maybe<Scalars['Float']['output']>;
};

export type DeleteAddressDto = {
  addressType?: InputMaybe<EAddressType>;
  id: Scalars['String']['input'];
};

export type DeleteAssignRequestsDto = {
  assignRequestIds?: InputMaybe<Array<Scalars['String']['input']>>;
  bookingItemId: Scalars['String']['input'];
};

export type DeleteTransferRequestsDto = {
  bookingItemId: Scalars['String']['input'];
  transferRequestIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DenyConnectionByTokenDto = {
  token: Scalars['String']['input'];
};

export type DepartureAttributesDto = {
  airportCode?: Maybe<Scalars['String']['output']>;
  airportFsCode?: Maybe<Scalars['String']['output']>;
  airportIataCode?: Maybe<Scalars['String']['output']>;
  dateTime?: Maybe<Scalars['String']['output']>;
};

export type DepartureFlightStatusAttributesDto = {
  actualGateDateTime?: Maybe<Scalars['String']['output']>;
  actualRunwayDateTime?: Maybe<Scalars['String']['output']>;
  airportCode?: Maybe<Scalars['String']['output']>;
  airportFsCode?: Maybe<Scalars['String']['output']>;
  airportIataCode?: Maybe<Scalars['String']['output']>;
  estimatedGateDateTime?: Maybe<Scalars['String']['output']>;
  estimatedRunwayDateTime?: Maybe<Scalars['String']['output']>;
  gate?: Maybe<Scalars['String']['output']>;
  scheduledGateDateTime?: Maybe<Scalars['String']['output']>;
  scheduledRunwayDateTime?: Maybe<Scalars['String']['output']>;
  terminal?: Maybe<Scalars['String']['output']>;
};

export type DiscountEntity = {
  amount?: Maybe<Scalars['Float']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  currentUseQuantity: Scalars['Float']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  maxUseQuantity?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  percent?: Maybe<Scalars['Float']['output']>;
  range: EDiscountRange;
  startedAt: Scalars['DateTime']['output'];
  type: EDiscountType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type DiscountHistoryDto = {
  amount?: Maybe<Scalars['Float']['output']>;
  percent?: Maybe<Scalars['Float']['output']>;
  type: EDiscountType;
};

export type DiscountsPaginationResponseDto = {
  data: Array<DiscountEntity>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DivertedFlightStatusAttributesDto = {
  airportCode?: Maybe<Scalars['String']['output']>;
  airportFsCode?: Maybe<Scalars['String']['output']>;
  airportIataCode?: Maybe<Scalars['String']['output']>;
};

export enum EAddressType {
  BusinessCompany = 'BUSINESS_COMPANY',
  Vendor = 'VENDOR'
}

export enum EAgentServiceModel {
  FlatRatePricing = 'FLAT_RATE_PRICING',
  SalaryPricing = 'SALARY_PRICING',
  TierPricing = 'TIER_PRICING'
}

export enum EAlertType {
  ActualConnectionProblem = 'ActualConnectionProblem',
  ConnectionInfo = 'ConnectionInfo',
  EstimatedConnectionProblem = 'EstimatedConnectionProblem',
  FlightArrivalDelay = 'FlightArrivalDelay',
  FlightArrivalGateChange = 'FlightArrivalGateChange',
  FlightArrived = 'FlightArrived',
  FlightArrivedLate = 'FlightArrivedLate',
  FlightBaggageChange = 'FlightBaggageChange',
  FlightCancellation = 'FlightCancellation',
  FlightDeparted = 'FlightDeparted',
  FlightDepartedLate = 'FlightDepartedLate',
  FlightDepartureDelay = 'FlightDepartureDelay',
  FlightDepartureGateChange = 'FlightDepartureGateChange',
  FlightDiversion = 'FlightDiversion',
  FlightReinstated = 'FlightReinstated',
  LegArrivalDelay = 'LegArrivalDelay',
  LegArrivalGateChange = 'LegArrivalGateChange',
  LegArrivalInfo = 'LegArrivalInfo',
  LegArrived = 'LegArrived',
  LegBaggageChange = 'LegBaggageChange',
  LegDeparted = 'LegDeparted',
  LegDepartureDelay = 'LegDepartureDelay',
  LegDepartureGateChange = 'LegDepartureGateChange',
  LegDepartureInfo = 'LegDepartureInfo',
  WaiverMatch = 'WaiverMatch'
}

export enum EAssignRequestStatus {
  Accepted = 'ACCEPTED',
  Approved = 'APPROVED',
  Denied = 'DENIED',
  Pending = 'PENDING',
  Withdrawn = 'WITHDRAWN'
}

export enum EBookingItemStatus {
  Acknowledged = 'ACKNOWLEDGED',
  AgentComplete = 'AGENT_COMPLETE',
  Complete = 'COMPLETE',
  Confirmed = 'CONFIRMED',
  Expired = 'EXPIRED',
  InProgress = 'IN_PROGRESS',
  VendorComplete = 'VENDOR_COMPLETE',
  Withdrawn = 'WITHDRAWN'
}

export enum EBookingPaymentStatus {
  Canceled = 'CANCELED',
  Issued = 'ISSUED',
  Paid = 'PAID'
}

export enum ECategory {
  BodyGuard = 'BODY_GUARD',
  Meet = 'MEET',
  Transportation = 'TRANSPORTATION'
}

export enum EChecklistItemStatus {
  Complete = 'COMPLETE',
  Pending = 'PENDING'
}

export enum EClassOfService {
  BusinessClass = 'BUSINESS_CLASS',
  EconomyClass = 'ECONOMY_CLASS',
  FirstClass = 'FIRST_CLASS'
}

export enum EContractStatus {
  Approved = 'APPROVED',
  Denied = 'DENIED',
  Draft = 'DRAFT',
  Sent = 'SENT'
}

export enum ECoverageLevel {
  Airport = 'AIRPORT',
  City = 'CITY',
  Country = 'COUNTRY',
  Global = 'GLOBAL'
}

export enum ECurrency {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Bwp = 'BWP',
  Byn = 'BYN',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Krw = 'KRW',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sle = 'SLE',
  Sos = 'SOS',
  Srd = 'SRD',
  Std = 'STD',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xcd = 'XCD',
  Xof = 'XOF',
  Xpf = 'XPF',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW'
}

export enum EDiscountRange {
  GlobalCoupon = 'GLOBAL_COUPON',
  RestrictionCoupon = 'RESTRICTION_COUPON'
}

export enum EDiscountType {
  FixAmount = 'FIX_AMOUNT',
  Percentage = 'PERCENTAGE'
}

export enum EEventLogType {
  AgentAcceptAssignmentRequest = 'AGENT_ACCEPT_ASSIGNMENT_REQUEST',
  AgentCompleteBookingItem = 'AGENT_COMPLETE_BOOKING_ITEM',
  AgentDenyAssignmentRequest = 'AGENT_DENY_ASSIGNMENT_REQUEST',
  AgentStartServiceDelivery = 'AGENT_START_SERVICE_DELIVERY',
  AgentWithdrawAssignmentRequest = 'AGENT_WITHDRAW_ASSIGNMENT_REQUEST',
  CustomerWithdrawBookingItem = 'CUSTOMER_WITHDRAW_BOOKING_ITEM',
  NewBookingItem = 'NEW_BOOKING_ITEM',
  OwnerVendorApproveTransferRequest = 'OWNER_VENDOR_APPROVE_TRANSFER_REQUEST',
  OwnerVendorCancelTransferRequest = 'OWNER_VENDOR_CANCEL_TRANSFER_REQUEST',
  OwnerVendorCreateTransferRequest = 'OWNER_VENDOR_CREATE_TRANSFER_REQUEST',
  OwnerVendorWithdrawApprovedTransferVendor = 'OWNER_VENDOR_WITHDRAW_APPROVED_TRANSFER_VENDOR',
  UpdateEmergencyContactsInformation = 'UPDATE_EMERGENCY_CONTACTS_INFORMATION',
  UpdateFlightSchedule = 'UPDATE_FLIGHT_SCHEDULE',
  UpdatePassengerInformation = 'UPDATE_PASSENGER_INFORMATION',
  UpdateTransportationInformation = 'UPDATE_TRANSPORTATION_INFORMATION',
  VendorAcceptTransferRequest = 'VENDOR_ACCEPT_TRANSFER_REQUEST',
  VendorApproveAssignmentRequest = 'VENDOR_APPROVE_ASSIGNMENT_REQUEST',
  VendorCancelAssignmentRequest = 'VENDOR_CANCEL_ASSIGNMENT_REQUEST',
  VendorCompleteBookingItem = 'VENDOR_COMPLETE_BOOKING_ITEM',
  VendorCreateAssignmentRequest = 'VENDOR_CREATE_ASSIGNMENT_REQUEST',
  VendorDenyTransferRequest = 'VENDOR_DENY_TRANSFER_REQUEST',
  VendorRemoveApprovedAgent = 'VENDOR_REMOVE_APPROVED_AGENT',
  VendorWithdrawTransferRequest = 'VENDOR_WITHDRAW_TRANSFER_REQUEST'
}

export enum EExpenseRole {
  Agent = 'AGENT',
  PrimaryVendor = 'PRIMARY_VENDOR',
  Vendor = 'VENDOR'
}

export enum EFeeType {
  FixAmount = 'FIX_AMOUNT',
  Percentage = 'PERCENTAGE'
}

export enum EFilterType {
  AllBooking = 'ALL_BOOKING',
  ByAllAgent = 'BY_ALL_AGENT'
}

export enum EFlightSegmentType {
  Arrival = 'ARRIVAL',
  Connection = 'CONNECTION',
  Departure = 'DEPARTURE'
}

export enum EFlightStatus {
  Arrived = 'ARRIVED',
  Canceled = 'CANCELED',
  Delayed = 'DELAYED',
  Departed = 'DEPARTED',
  Earlier = 'EARLIER',
  OnTime = 'ON_TIME'
}

export enum EFsFlightStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  DataSourceNeeded = 'DATA_SOURCE_NEEDED',
  Diverted = 'DIVERTED',
  Landed = 'LANDED',
  NotOperational = 'NOT_OPERATIONAL',
  Redirected = 'REDIRECTED',
  Scheduled = 'SCHEDULED',
  Unknown = 'UNKNOWN'
}

export enum EHolidayStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED'
}

export enum EHolidayType {
  Fixed = 'FIXED',
  Variable = 'VARIABLE'
}

export enum EInvoiceItemStatus {
  Declined = 'DECLINED',
  Expired = 'EXPIRED',
  Issued = 'ISSUED',
  Paid = 'PAID'
}

export enum EInvoiceStatus {
  Approved = 'APPROVED',
  Canceled = 'CANCELED',
  Declined = 'DECLINED',
  Issued = 'ISSUED',
  Paid = 'PAID'
}

export enum EInvoiceType {
  Agent = 'AGENT',
  Customer = 'CUSTOMER',
  Vendor = 'VENDOR'
}

export type ElAssignRequestsResponseDto = {
  assignAgent?: Maybe<UserResponseDto>;
  assignAgentId: Scalars['String']['output'];
  bookingItemId: Scalars['String']['output'];
  clockIn?: Maybe<Scalars['DateTime']['output']>;
  clockOut?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  status: EAssignRequestStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
  withdrawReason?: Maybe<Scalars['String']['output']>;
};

export type ElTransferRequestsResponseDto = {
  bookingItemId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: UserResponseDto;
  createdById: Scalars['String']['output'];
  currency: ECurrency;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  receiverVendor?: Maybe<VendorEntity>;
  receiverVendorId: Scalars['String']['output'];
  status: ETransferRequestStatus;
  transferAirportServiceId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
  withdrawReason?: Maybe<Scalars['String']['output']>;
};

export enum ENoteType {
  Checklist = 'CHECKLIST',
  CustomNote = 'CUSTOM_NOTE',
  Expense = 'EXPENSE'
}

export enum EPaymentMethodType {
  BankTransfer = 'BANK_TRANSFER',
  CreditCard = 'CREDIT_CARD'
}

export enum EProviderName {
  Paya = 'PAYA',
  Stripe = 'STRIPE'
}

export enum EQueryType {
  Base = 'BASE',
  Contract = 'CONTRACT',
  Customer = 'CUSTOMER',
  Mapping = 'MAPPING'
}

export enum ERoleTypes {
  BusinessAdmin = 'BUSINESS_ADMIN',
  BusinessStaff = 'BUSINESS_STAFF',
  Customer = 'CUSTOMER',
  VendorAdmin = 'VENDOR_ADMIN',
  VendorAgent = 'VENDOR_AGENT',
  VendorStaff = 'VENDOR_STAFF'
}

export enum EServiceModel {
  FlatRatePricing = 'FLAT_RATE_PRICING',
  TierPricing = 'TIER_PRICING'
}

export enum ESubPath {
  Business = 'BUSINESS',
  User = 'USER',
  Vendor = 'VENDOR'
}

export enum ETimeRange {
  CurrentMonth = 'CURRENT_MONTH',
  CurrentYear = 'CURRENT_YEAR',
  FirstHaftYear = 'FIRST_HAFT_YEAR',
  Last_3Months = 'LAST_3_MONTHS',
  LastHaftYear = 'LAST_HAFT_YEAR',
  LastMonth = 'LAST_MONTH',
  LastYear = 'LAST_YEAR'
}

export enum ETransferRequestStatus {
  Accepted = 'ACCEPTED',
  Approved = 'APPROVED',
  Denied = 'DENIED',
  Pending = 'PENDING',
  Withdrawn = 'WITHDRAWN'
}

export enum ETypeExpense {
  AdditionalHours = 'ADDITIONAL_HOURS',
  AdditionalPassengers = 'ADDITIONAL_PASSENGERS',
  ExcessLuggage = 'EXCESS_LUGGAGE',
  FoodBeverage = 'FOOD_BEVERAGE',
  Lounge = 'LOUNGE',
  Other = 'OTHER',
  PorterTip = 'PORTER_TIP'
}

export enum EVendorConnectionStatus {
  Accepted = 'ACCEPTED',
  Deny = 'DENY',
  Requesting = 'REQUESTING'
}

export enum EVendorConnectionType {
  All = 'ALL',
  MappingService = 'MAPPING_SERVICE',
  Receive = 'RECEIVE',
  Send = 'SEND'
}

export type EmergencyContact = {
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type EmergencyContactInput = {
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type EvenLogsPaginationResponseDto = {
  data: Array<EventLogResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventLogDataDto = {
  approvedAgent?: Maybe<UserResponseDto>;
  arrivalFlightSchedule?: Maybe<FlightSchedule>;
  assignRequests?: Maybe<Array<ElAssignRequestsResponseDto>>;
  completedBy?: Maybe<UserResponseDto>;
  departureFlightSchedule?: Maybe<FlightSchedule>;
  emergencyContacts?: Maybe<Array<EmergencyContact>>;
  passenger?: Maybe<Array<PassengerDto>>;
  status?: Maybe<EBookingItemStatus>;
  transferRequests?: Maybe<Array<ElTransferRequestsResponseDto>>;
  transportInformation?: Maybe<TransportInformation>;
  vendor?: Maybe<VendorResponseDto>;
  withdrawReason?: Maybe<Scalars['String']['output']>;
  withdrawnBy?: Maybe<UserResponseDto>;
};

export type EventLogResponseDto = {
  bookingItem: BookingItemResponseDto;
  bookingItemId: Scalars['UUID']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: UserResponseDto;
  createdById: Scalars['UUID']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  newData?: Maybe<EventLogDataDto>;
  oldData?: Maybe<EventLogDataDto>;
  receiver?: Maybe<UserResponseDto>;
  removedAgentId?: Maybe<Scalars['UUID']['output']>;
  type: EEventLogType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type ExchangeRatePaginationResponseDto = {
  data: Array<ExchangeRateyResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ExchangeRateyResponseDto = {
  baseCurrency: ECurrency;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rate: Scalars['Float']['output'];
  symbol: ECurrency;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendor?: Maybe<VendorResponseDto>;
  vendorId: Scalars['String']['output'];
};

export type FeeAttributes = {
  additionalHour?: Maybe<FeeDetail>;
  additionalPassenger?: Maybe<FeeDetail>;
  holiday?: Maybe<FeeDetail>;
  noShow?: Maybe<FeeDetail>;
  sameDayRequest?: Maybe<FeeDetail>;
  serviceBuffer?: Maybe<FeeDetail>;
};

export type FeeAttributesInput = {
  additionalHour?: InputMaybe<FeeDetailInput>;
  additionalPassenger?: InputMaybe<FeeDetailInput>;
  holiday?: InputMaybe<FeeDetailInput>;
  noShow?: InputMaybe<FeeDetailInput>;
  sameDayRequest?: InputMaybe<FeeDetailInput>;
  serviceBuffer?: InputMaybe<FeeDetailInput>;
};

export type FeeDetail = {
  type?: Maybe<EFeeType>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type FeeDetailInput = {
  type?: InputMaybe<EFeeType>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type FlightAttributesDto = {
  arrival?: Maybe<ArrivalAttributesDto>;
  bookedAirlineCode?: Maybe<Scalars['String']['output']>;
  bookedAirlineFsCode?: Maybe<Scalars['String']['output']>;
  bookedAirlineIataCode?: Maybe<Scalars['String']['output']>;
  departure?: Maybe<DepartureAttributesDto>;
  flightIndex?: Maybe<Scalars['Float']['output']>;
  flightNumber?: Maybe<Scalars['String']['output']>;
  flightStatuses?: Maybe<Array<FlightStatusAttributesDto>>;
};

export type FlightSchedule = {
  airlineName?: Maybe<Scalars['String']['output']>;
  arrivalAirportFsCode: Scalars['String']['output'];
  arrivalAirportName?: Maybe<Scalars['String']['output']>;
  arrivalCityName?: Maybe<Scalars['String']['output']>;
  arrivalCountryCode: Scalars['String']['output'];
  arrivalTerminal?: Maybe<Scalars['String']['output']>;
  arrivalTime: Scalars['String']['output'];
  arrivalTimeZone?: Maybe<Scalars['String']['output']>;
  carrierFsCode: Scalars['String']['output'];
  departureAirportFsCode: Scalars['String']['output'];
  departureAirportName?: Maybe<Scalars['String']['output']>;
  departureCityName?: Maybe<Scalars['String']['output']>;
  departureCountryCode: Scalars['String']['output'];
  departureTerminal?: Maybe<Scalars['String']['output']>;
  departureTime: Scalars['String']['output'];
  departureTimeZone?: Maybe<Scalars['String']['output']>;
  flightNumber: Scalars['String']['output'];
  timeZone: Scalars['String']['output'];
};

export type FlightScheduleInput = {
  airlineName?: InputMaybe<Scalars['String']['input']>;
  arrivalAirportFsCode: Scalars['String']['input'];
  arrivalAirportName?: InputMaybe<Scalars['String']['input']>;
  arrivalCityName?: InputMaybe<Scalars['String']['input']>;
  arrivalCountryCode: Scalars['String']['input'];
  arrivalTerminal?: InputMaybe<Scalars['String']['input']>;
  arrivalTime: Scalars['String']['input'];
  arrivalTimeZone?: InputMaybe<Scalars['String']['input']>;
  carrierFsCode: Scalars['String']['input'];
  departureAirportFsCode: Scalars['String']['input'];
  departureAirportName?: InputMaybe<Scalars['String']['input']>;
  departureCityName?: InputMaybe<Scalars['String']['input']>;
  departureCountryCode: Scalars['String']['input'];
  departureTerminal?: InputMaybe<Scalars['String']['input']>;
  departureTime: Scalars['String']['input'];
  departureTimeZone?: InputMaybe<Scalars['String']['input']>;
  flightNumber: Scalars['String']['input'];
  timeZone: Scalars['String']['input'];
};

export type FlightScheduleResponse = {
  connectingFlightRoutes: Array<ConnectionFlightRoute>;
  id: Scalars['String']['output'];
  isValidConnection?: Maybe<Scalars['Boolean']['output']>;
  isValidTravelTime?: Maybe<Scalars['Boolean']['output']>;
  stops: Scalars['Int']['output'];
};

export type FlightSchedulesPaginationResponseDto = {
  data: Array<FlightScheduleResponse>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FlightSegment = {
  arrivalAirportFsCode: Scalars['String']['output'];
  arrivalTerminal?: Maybe<Scalars['String']['output']>;
  arrivalTime?: Maybe<Scalars['String']['output']>;
  carrierFsCode: Scalars['String']['output'];
  departureAirportFsCode: Scalars['String']['output'];
  departureTerminal?: Maybe<Scalars['String']['output']>;
  departureTime?: Maybe<Scalars['String']['output']>;
  flightEquipmentIataCode?: Maybe<Scalars['String']['output']>;
  flightNumber: Scalars['String']['output'];
  referenceCode?: Maybe<Scalars['String']['output']>;
  serviceClasses?: Maybe<Array<Scalars['String']['output']>>;
  serviceType?: Maybe<Scalars['String']['output']>;
  stops?: Maybe<Scalars['Int']['output']>;
  trafficRestrictions?: Maybe<Array<Scalars['String']['output']>>;
};

export type FlightSegmentInput = {
  arrivalAirportFsCode: Scalars['String']['input'];
  arrivalTerminal?: InputMaybe<Scalars['String']['input']>;
  arrivalTime?: InputMaybe<Scalars['String']['input']>;
  carrierFsCode: Scalars['String']['input'];
  departureAirportFsCode: Scalars['String']['input'];
  departureTerminal?: InputMaybe<Scalars['String']['input']>;
  departureTime?: InputMaybe<Scalars['String']['input']>;
  flightEquipmentIataCode?: InputMaybe<Scalars['String']['input']>;
  flightNumber: Scalars['String']['input'];
  referenceCode?: InputMaybe<Scalars['String']['input']>;
  serviceClasses?: InputMaybe<Array<Scalars['String']['input']>>;
  serviceType?: InputMaybe<Scalars['String']['input']>;
  stops?: InputMaybe<Scalars['Int']['input']>;
  trafficRestrictions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FlightSegmentServiceResponseDto = {
  airportCity: Scalars['String']['output'];
  airportFsCode: Scalars['String']['output'];
  flightScheduleId?: Maybe<Scalars['String']['output']>;
  keyRoute?: Maybe<Scalars['String']['output']>;
  meetAndAssists: Array<MeetAndAssistDto>;
  reason?: Maybe<Scalars['String']['output']>;
  segment: SubFlightSegmentServiceDto;
  segmentType: EFlightSegmentType;
};

export type FlightStatusAttributesDto = {
  arrival?: Maybe<ArrivalFlightStatusAttributesDto>;
  departure?: Maybe<DepartureFlightStatusAttributesDto>;
  diverted?: Maybe<DivertedFlightStatusAttributesDto>;
  flightNumber?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  operatingAirlineCode?: Maybe<Scalars['String']['output']>;
  operatingAirlineFsCode?: Maybe<Scalars['String']['output']>;
  operatingAirlineIataCode?: Maybe<Scalars['String']['output']>;
  primaryMarketingAirlineCode?: Maybe<Scalars['String']['output']>;
  primaryMarketingAirlineFsCode?: Maybe<Scalars['String']['output']>;
  primaryMarketingAirlineIataCode?: Maybe<Scalars['String']['output']>;
  status?: Maybe<EFsFlightStatus>;
};

export type FlightStatusHistoryDto = {
  arrivalFlightStatus?: Maybe<EFlightStatus>;
  createdAt?: Maybe<Scalars['String']['output']>;
  departureFlightStatus?: Maybe<EFlightStatus>;
};

export type GateAttributesDto = {
  current?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
};

export type GetAgentServicesByQueryDto = {
  agentId?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<ECategory>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  serviceType?: InputMaybe<EFlightSegmentType>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetAgentsToAssignRequestDto = {
  bookingItemId: Scalars['String']['input'];
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetAirportServicesByQuery = {
  airportId?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<ECategory>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  contractId?: InputMaybe<Scalars['String']['input']>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  friendVendorId?: InputMaybe<Scalars['String']['input']>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  queryType: EQueryType;
  serviceType?: InputMaybe<EFlightSegmentType>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetAirportsByQueryDto = {
  countryId?: InputMaybe<Scalars['String']['input']>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  mappingConditions?: InputMaybe<MappingConditionsDto>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetAirportsForVendorByQuery = {
  countryCode?: InputMaybe<Scalars['String']['input']>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetAlertsByQuery = {
  bookingItemId?: InputMaybe<Scalars['String']['input']>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetAllBookingItemChecklistsDto = {
  id: Scalars['String']['input'];
};

export type GetBookingItemNotesDto = {
  bookingItemId: Scalars['String']['input'];
};

export type GetBookingItemStatsDto = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  isRevenue?: InputMaybe<Scalars['Boolean']['input']>;
  timeRange?: InputMaybe<ETimeRange>;
  type: EFilterType;
};

export type GetBookingItemsByQueryDto = {
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  statuses?: InputMaybe<Array<EBookingItemStatus>>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetCategoriesByQueryDto = {
  category: ECategory;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  vendorId: Scalars['String']['input'];
};

export type GetChecklistsByFlightSegmentTypeDto = {
  flightSegmentType: EFlightSegmentType;
};

export type GetCitiesByQueryDto = {
  countryId?: InputMaybe<Scalars['String']['input']>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetContractsByQuery = {
  airportId: Scalars['String']['input'];
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  statuses?: InputMaybe<Array<EContractStatus>>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetDiscountByCodeDto = {
  code: Scalars['String']['input'];
};

export type GetDiscountsByQueryDto = {
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  typeRange?: InputMaybe<EDiscountRange>;
};

export type GetEventLogsByQuery = {
  bookingItemId?: InputMaybe<Scalars['String']['input']>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetExchangeRatesByQueryDto = {
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  symbol?: InputMaybe<ECurrency>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetFlightSchedulesByQueryDto = {
  cityFrom?: InputMaybe<Scalars['String']['input']>;
  cityTo?: InputMaybe<Scalars['String']['input']>;
  connectionFlights?: InputMaybe<Array<ConnectionFlightDto>>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  flightNumber?: InputMaybe<Scalars['String']['input']>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  travelDate: Scalars['DateTime']['input'];
};

export type GetHolidaysByQueryDto = {
  airportId?: InputMaybe<Scalars['String']['input']>;
  coverageLevel?: InputMaybe<ECoverageLevel>;
  coverageLevelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isAnnual?: InputMaybe<Scalars['Boolean']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  statuses: Array<EHolidayStatus>;
  take?: InputMaybe<Scalars['Float']['input']>;
  types: Array<EHolidayType>;
};

export type GetInvoicesByQueryDto = {
  amountMax?: InputMaybe<Scalars['Float']['input']>;
  amountMin?: InputMaybe<Scalars['Float']['input']>;
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  keySearchPrimaryPassenger?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  receiverVendorId?: InputMaybe<Scalars['String']['input']>;
  senderVendorId?: InputMaybe<Scalars['String']['input']>;
  statuses?: InputMaybe<Array<EInvoiceStatus>>;
  take?: InputMaybe<Scalars['Float']['input']>;
  type: EInvoiceType;
};

export type GetOfferorAirportServicesByQuery = {
  bookingItemId: Scalars['String']['input'];
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetPaymentMethodsDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
};

export type GetPaymentTransactionsByQueryDto = {
  bookingId?: InputMaybe<Scalars['String']['input']>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  paymentCustomerId?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

export type GetRecordsPaginationDto = {
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetRequestQuotesByQueryDto = {
  airportCode?: InputMaybe<Scalars['String']['input']>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  flightSegmentType?: InputMaybe<EFlightSegmentType>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetServicesByFlightNumberDto = {
  connectionFlights?: InputMaybe<Array<ConnectionFlightDto>>;
  flightNumber?: InputMaybe<Scalars['String']['input']>;
  passengerQuantity: Scalars['Float']['input'];
  travelDate: Scalars['DateTime']['input'];
};

export type GetServicesByFlightScheduleIdDto = {
  passengerQuantity: Scalars['Float']['input'];
  scheduleId: Scalars['String']['input'];
};

export type GetServicesByManualInfoDto = {
  arrivalAirportCode: Scalars['String']['input'];
  arrivalDateTime: Scalars['DateTime']['input'];
  connectionFlights?: InputMaybe<Array<ManualConnectionFlightDto>>;
  departureAirportCode: Scalars['String']['input'];
  departureDateTime: Scalars['DateTime']['input'];
  flightNumber?: InputMaybe<Scalars['String']['input']>;
  passengerQuantity: Scalars['Float']['input'];
};

export type GetSignedUrlDto = {
  filename: Scalars['String']['input'];
  filetype?: InputMaybe<Scalars['String']['input']>;
  subPath: ESubPath;
};

export type GetUnbilledInvoiceItemsByQueryDto = {
  amountMax?: InputMaybe<Scalars['Float']['input']>;
  amountMin?: InputMaybe<Scalars['Float']['input']>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isIncludeDisableItems?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  keySearchPrimaryPassenger?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  receiverVendorId?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  type: EInvoiceType;
};

export type GetUserInvitationsByQueryDto = {
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  roleIds: Array<ERoleTypes>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetUsersByQueryDto = {
  countryName?: InputMaybe<Scalars['String']['input']>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  roleIds?: InputMaybe<Array<ERoleTypes>>;
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type GetVendorConnectionsByQuery = {
  airportId?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<ECategory>;
  createdFrom?: InputMaybe<Scalars['String']['input']>;
  createdTo?: InputMaybe<Scalars['String']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  includeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isSelectAll?: InputMaybe<Scalars['Boolean']['input']>;
  keySearch?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  statuses?: InputMaybe<Array<EVendorConnectionStatus>>;
  take?: InputMaybe<Scalars['Float']['input']>;
  type: EVendorConnectionType;
};

export type GetWithdrawPriceInfoDto = {
  bookingId: Scalars['String']['input'];
};

export type HolidayEntity = {
  airports?: Maybe<Array<AirportEntity>>;
  belongToCountryId?: Maybe<Scalars['String']['output']>;
  cities?: Maybe<Array<CityEntity>>;
  countries?: Maybe<Array<CountryEntity>>;
  coverageLevel: ECoverageLevel;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fromDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isAnnual: Scalars['Boolean']['output'];
  isRange: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  rule?: Maybe<Scalars['String']['output']>;
  status: EHolidayStatus;
  toDate?: Maybe<Scalars['String']['output']>;
  type: EHolidayType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type HolidayHistoryDto = {
  fromDate?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  toDate?: Maybe<Scalars['String']['output']>;
};

export type HolidaysResponseDto = {
  data: Array<HolidayEntity>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type InviteVendorsDto = {
  emails: Array<Scalars['String']['input']>;
};

export type InvoiceEntity = {
  bookingId?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  currency?: Maybe<ECurrency>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  displayId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  invoiceMessage?: Maybe<Scalars['String']['output']>;
  paymentInfo?: Maybe<Scalars['String']['output']>;
  paymentMethod: EPaymentMethodType;
  receiverCustomerId?: Maybe<Scalars['String']['output']>;
  receiverVendorId?: Maybe<Scalars['String']['output']>;
  senderAgentId?: Maybe<Scalars['String']['output']>;
  senderVendorId?: Maybe<Scalars['String']['output']>;
  status: EInvoiceStatus;
  total: Scalars['Float']['output'];
  type: EInvoiceType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InvoiceItemEntity = {
  agentPrice: Scalars['Float']['output'];
  bookingItemId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<ECurrency>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  status: EInvoiceItemStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type InvoiceItemResponseDto = {
  agentPrice: Scalars['Float']['output'];
  bookingItem: BookingItemResponseDto;
  bookingItemId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<ECurrency>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  status: EInvoiceItemStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type InvoiceItemsPaginationResponseDto = {
  data: Array<InvoiceItemResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type InvoiceResponseDto = {
  booking?: Maybe<SubBookingDto>;
  bookingId?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  currency?: Maybe<ECurrency>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  displayId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  invoiceItems?: Maybe<Array<InvoiceItemResponseDto>>;
  invoiceMessage?: Maybe<Scalars['String']['output']>;
  paymentInfo?: Maybe<Scalars['String']['output']>;
  paymentMethod: EPaymentMethodType;
  receiverCustomerId?: Maybe<Scalars['String']['output']>;
  receiverVendor?: Maybe<VendorEntity>;
  receiverVendorId?: Maybe<Scalars['String']['output']>;
  senderAgentId?: Maybe<Scalars['String']['output']>;
  senderVendor?: Maybe<VendorEntity>;
  senderVendorId?: Maybe<Scalars['String']['output']>;
  status: EInvoiceStatus;
  total: Scalars['Float']['output'];
  type: EInvoiceType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InvoicesPaginationResponseDto = {
  data: Array<InvoiceResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LegAttributesDto = {
  flights?: Maybe<Array<FlightAttributesDto>>;
  legIndex?: Maybe<Scalars['Float']['output']>;
};

export type LinkPaymentProviderCustomerDto = {
  customerId?: InputMaybe<Scalars['String']['input']>;
};

export type ManageAssignRequestStatusDto = {
  assignRequestId: Scalars['String']['input'];
  status: EAssignRequestStatus;
};

export type ManageBookingItemStatusDto = {
  expiredReason?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  status: EBookingItemStatus;
  withdrawReason?: InputMaybe<Scalars['String']['input']>;
};

export type ManageChecklistItemStatusAndAddNoteDto = {
  id: Scalars['String']['input'];
  note: Scalars['String']['input'];
  status: EChecklistItemStatus;
};

export type ManageContractStatusDto = {
  contractAirportServices?: InputMaybe<Array<ContractAirportServicesDto>>;
  id: Scalars['String']['input'];
  status: EContractStatus;
};

export type ManageInvoiceStatusDto = {
  invoiceId: Scalars['String']['input'];
  status: EInvoiceStatus;
};

export type ManageTransferRequestStatusDto = {
  status: ETransferRequestStatus;
  transferRequestId: Scalars['String']['input'];
};

export type ManualConnectionFlightDto = {
  arrivalAirportCode: Scalars['String']['input'];
  arrivalDateTime: Scalars['DateTime']['input'];
  departureDateTime: Scalars['DateTime']['input'];
  flightNumber: Scalars['String']['input'];
};

export type ManualFlightInfoDto = {
  arrivalAirportCode?: InputMaybe<Scalars['String']['input']>;
  arrivalDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  carrierFsCode: Scalars['String']['input'];
  departureAirportCode?: InputMaybe<Scalars['String']['input']>;
  departureDateTime?: InputMaybe<Scalars['DateTime']['input']>;
  flightNumber: Scalars['String']['input'];
};

export type MappingConditionsDto = {
  agentId: Scalars['String']['input'];
  category: ECategory;
  categoryName: Scalars['String']['input'];
  serviceType: EFlightSegmentType;
};

export type MappingContractAirportServiceDto = {
  id: Scalars['String']['input'];
  mappingAirportServiceId: Scalars['String']['input'];
};

export type MarkChecklistItemApplicableOrNotDto = {
  id: Scalars['String']['input'];
  note: Scalars['String']['input'];
};

export type MeetAndAssistDto = {
  description: Array<Scalars['String']['output']>;
  flightType?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isValidConnection?: Maybe<Scalars['Boolean']['output']>;
  isValidTravelTime?: Maybe<Scalars['Boolean']['output']>;
  policy: Policy;
  price: Scalars['Float']['output'];
  serviceConditions: ServiceConditions;
  serviceCurrency: ECurrency;
  serviceModel: EServiceModel;
  serviceType: Scalars['String']['output'];
};

export type Mutation = {
  activateBookingItemChecklist: Scalars['String']['output'];
  activateUser: Scalars['String']['output'];
  addPaymentMethod: Scalars['String']['output'];
  approveAssignRequest: AssignRequestEntity;
  approveTransferRequest: TransferRequestEntity;
  approvedAgentWithdraw: Scalars['Int']['output'];
  arrangeBookingItemChecklists: Array<BookingItemChecklistEntity>;
  confirmAccount: Scalars['Float']['output'];
  confirmInvoiceWasPaid: InvoiceEntity;
  createAddress: AddressEntity;
  createAgentService: AgentServiceEntity;
  createAirportServices: Array<AirportServiceEntity>;
  createAssignRequests: Array<AssignRequestEntity>;
  createBooking: BookingEntity;
  createBookingItemChecklist: BookingItemChecklistEntity;
  createBookingItemExpense: BookingItemExpenseEntity;
  createCardAssignment: CardAssignmentEntity;
  createCategory: CategoryEntity;
  createContract: ContractEntity;
  createCustomNote: Scalars['Int']['output'];
  createDiscount: DiscountEntity;
  createExchangeRates: Scalars['Int']['output'];
  createHoliday: HolidayEntity;
  createInvoice: InvoiceEntity;
  createPaymentCredential: Scalars['Float']['output'];
  createRequestQuotes: Array<RequestQuoteEntity>;
  createTransferRequests: Scalars['Int']['output'];
  createUserInvitations: Scalars['Float']['output'];
  customerWithdrawBookingItem: BookingItemResponseDto;
  deactivateAuthAccount: Scalars['String']['output'];
  deactivateUser: Scalars['String']['output'];
  deleteAddress: Scalars['String']['output'];
  deleteAgentService: Scalars['String']['output'];
  deleteAirportService: Scalars['String']['output'];
  deleteAssignRequests: Scalars['Int']['output'];
  deleteBookingItemChecklist: Scalars['String']['output'];
  deleteBookingItemExpense: Scalars['String']['output'];
  deleteCardAssignment: Scalars['String']['output'];
  deleteCategory: Scalars['String']['output'];
  deleteContract: Scalars['String']['output'];
  deleteCustomNote: Scalars['Int']['output'];
  deleteDiscount: Scalars['String']['output'];
  deleteExchangeRate: Scalars['String']['output'];
  deleteHoliday: Scalars['String']['output'];
  deleteInvoice: Scalars['String']['output'];
  deletePaymentCredential: Scalars['String']['output'];
  deleteTransferRequests: Scalars['Int']['output'];
  deleteUserInvitation: Scalars['Float']['output'];
  deleteVendorConnection: Scalars['String']['output'];
  denyVendorConnectionsByToken: Scalars['Float']['output'];
  inviteVendors: Array<Scalars['String']['output']>;
  linkPaymentProviderCustomer: Scalars['Float']['output'];
  manageAssignRequestStatus: AssignRequestEntity;
  manageBookingItemStatus: BookingItemResponseDto;
  manageCheckListItemStatusAndAddNote: Scalars['String']['output'];
  manageContractStatus: ContractEntity;
  manageInvoiceStatus: InvoiceEntity;
  manageTransferRequestStatus: TransferRequestEntity;
  manageVendorConnectionStatus: VendorConnectionEntity;
  markBookingItemAsAgentCompleted: BookingItemResponseDto;
  markChildBookingItemComplete: BookingItemResponseDto;
  markOrUnMarkCheckListItemAsNotApplicable: Scalars['String']['output'];
  preparePublicKeys: ResponsePublicKeysDto;
  refreshToken: SignInResponseDto;
  registerBusinessCompany: UserEntity;
  registerCustomer: UserEntity;
  registerInvitationAccount: UserEntity;
  registerVendorAndAccount: UserResponseDto;
  remarkCheckListItemAsIncomplete: Scalars['String']['output'];
  removeApprovedAgent: Scalars['Int']['output'];
  removeApprovedVendor: Scalars['Int']['output'];
  removePaymentMethod: Scalars['Float']['output'];
  resendEmailVerifyAccount: Scalars['String']['output'];
  resendInviteVendor: Scalars['String']['output'];
  resendUserInvitation: Scalars['Float']['output'];
  resetPassword: Scalars['Float']['output'];
  sendEmailToResetPassword: Scalars['Float']['output'];
  setPaymentMethodAsDefault: Scalars['Float']['output'];
  signIn: SignInResponseDto;
  updateAddress: AddressEntity;
  updateAgentService: AgentServiceEntity;
  updateAgentWorkingSchedule: AgentWorkingScheduleEntity;
  updateAirportService: AirportServiceEntity;
  updateAuthProfile: UserEntity;
  updateBookingItem: BookingItemResponseDto;
  updateBookingItemExpense: BookingItemExpenseEntity;
  updateBookingItemNote: Scalars['Int']['output'];
  updateBookingItemRating: Scalars['Float']['output'];
  updateBookingItemSchedule: Scalars['Float']['output'];
  updateBusinessCompany: BusinessCompanyEntity;
  updateCategory: CategoryEntity;
  updateContractAirportServiceMappings: Scalars['String']['output'];
  updateDiscount: DiscountEntity;
  updateExchangeRate: Scalars['Int']['output'];
  updateHoliday: HolidayEntity;
  updateInvoice: InvoiceEntity;
  updatePassword: SignInResponseDto;
  updateUser: UserEntity;
  updateVendor: VendorEntity;
  withdrawApprovedTransferRequest: Scalars['Int']['output'];
  withdrawBooking: BookingEntity;
};


export type MutationActivateBookingItemChecklistArgs = {
  payload: RecordIdDto;
};


export type MutationActivateUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationAddPaymentMethodArgs = {
  payload: AddPaymentMethodDto;
};


export type MutationApproveAssignRequestArgs = {
  payload: RecordIdDto;
};


export type MutationApproveTransferRequestArgs = {
  payload: RecordIdDto;
};


export type MutationApprovedAgentWithdrawArgs = {
  payload: ApprovedAgentWithdrawalDto;
};


export type MutationArrangeBookingItemChecklistsArgs = {
  payload: ArrangeBookingItemChecklistsDto;
};


export type MutationConfirmAccountArgs = {
  payload: ConfirmAccountDto;
};


export type MutationConfirmInvoiceWasPaidArgs = {
  payload: RecordIdDto;
};


export type MutationCreateAddressArgs = {
  payload: CreateAddressDto;
};


export type MutationCreateAgentServiceArgs = {
  payload: CreateAgentServiceDto;
};


export type MutationCreateAirportServicesArgs = {
  payload: CreateAirportServicesDto;
};


export type MutationCreateAssignRequestsArgs = {
  payload: CreateAssignRequestsDto;
};


export type MutationCreateBookingArgs = {
  payload: CreateBookingDto;
};


export type MutationCreateBookingItemChecklistArgs = {
  payload: CreateBookingItemChecklistDto;
};


export type MutationCreateBookingItemExpenseArgs = {
  payload: CreateBookingItemExpenseDto;
};


export type MutationCreateCardAssignmentArgs = {
  payload: CreateCardAssignmentDto;
};


export type MutationCreateCategoryArgs = {
  payload: CreateCategoryDto;
};


export type MutationCreateContractArgs = {
  payload: CreateContractDto;
};


export type MutationCreateCustomNoteArgs = {
  payload: CreateCustomNoteDto;
};


export type MutationCreateDiscountArgs = {
  payload: CreateDiscountDto;
};


export type MutationCreateExchangeRatesArgs = {
  payload: CreateExchangeRatesDto;
};


export type MutationCreateHolidayArgs = {
  payload: CreateHolidayDto;
};


export type MutationCreateInvoiceArgs = {
  payload: CreateInvoiceDto;
};


export type MutationCreatePaymentCredentialArgs = {
  payload: CreateCredentialDto;
};


export type MutationCreateRequestQuotesArgs = {
  payload: CreateRequestQuotesDto;
};


export type MutationCreateTransferRequestsArgs = {
  payload: CreateTransferRequestsDto;
};


export type MutationCreateUserInvitationsArgs = {
  payload: CreateUserInvitationsDto;
};


export type MutationCustomerWithdrawBookingItemArgs = {
  payload: CustomerWithdrawBookingItemDto;
};


export type MutationDeactivateUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAddressArgs = {
  payload: DeleteAddressDto;
};


export type MutationDeleteAgentServiceArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteAirportServiceArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteAssignRequestsArgs = {
  payload: DeleteAssignRequestsDto;
};


export type MutationDeleteBookingItemChecklistArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteBookingItemExpenseArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteCardAssignmentArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteCategoryArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteContractArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteCustomNoteArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteDiscountArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteExchangeRateArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteHolidayArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteInvoiceArgs = {
  payload: RecordIdDto;
};


export type MutationDeletePaymentCredentialArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteTransferRequestsArgs = {
  payload: DeleteTransferRequestsDto;
};


export type MutationDeleteUserInvitationArgs = {
  payload: RecordIdDto;
};


export type MutationDeleteVendorConnectionArgs = {
  payload: RecordIdDto;
};


export type MutationDenyVendorConnectionsByTokenArgs = {
  payload: DenyConnectionByTokenDto;
};


export type MutationInviteVendorsArgs = {
  payload: InviteVendorsDto;
};


export type MutationLinkPaymentProviderCustomerArgs = {
  payload: LinkPaymentProviderCustomerDto;
};


export type MutationManageAssignRequestStatusArgs = {
  payload: ManageAssignRequestStatusDto;
};


export type MutationManageBookingItemStatusArgs = {
  payload: ManageBookingItemStatusDto;
};


export type MutationManageCheckListItemStatusAndAddNoteArgs = {
  payload: ManageChecklistItemStatusAndAddNoteDto;
};


export type MutationManageContractStatusArgs = {
  payload: ManageContractStatusDto;
};


export type MutationManageInvoiceStatusArgs = {
  payload: ManageInvoiceStatusDto;
};


export type MutationManageTransferRequestStatusArgs = {
  payload: ManageTransferRequestStatusDto;
};


export type MutationManageVendorConnectionStatusArgs = {
  payload: UpdateVendorConnectionStatusDto;
};


export type MutationMarkBookingItemAsAgentCompletedArgs = {
  payload: RecordIdDto;
};


export type MutationMarkChildBookingItemCompleteArgs = {
  payload: RecordIdDto;
};


export type MutationMarkOrUnMarkCheckListItemAsNotApplicableArgs = {
  payload: MarkChecklistItemApplicableOrNotDto;
};


export type MutationPreparePublicKeysArgs = {
  payload: PreparePublicKeysDto;
};


export type MutationRefreshTokenArgs = {
  payload: RefreshTokenDto;
};


export type MutationRegisterBusinessCompanyArgs = {
  payload: RegisterBusinessCompanyDto;
};


export type MutationRegisterCustomerArgs = {
  payload: RegisterCustomerDto;
};


export type MutationRegisterInvitationAccountArgs = {
  payload: RegisterInvitationAccountDto;
};


export type MutationRegisterVendorAndAccountArgs = {
  payload: RegisterVendorAndAccountDto;
};


export type MutationRemarkCheckListItemAsIncompleteArgs = {
  payload: RecordIdDto;
};


export type MutationRemoveApprovedAgentArgs = {
  payload: RemoveApprovedAgentDto;
};


export type MutationRemoveApprovedVendorArgs = {
  payload: RemoveApprovedVendorDto;
};


export type MutationRemovePaymentMethodArgs = {
  payload: RemovePaymentMethodDto;
};


export type MutationResendEmailVerifyAccountArgs = {
  email: Scalars['String']['input'];
};


export type MutationResendInviteVendorArgs = {
  payload: ResendInviteVendorDto;
};


export type MutationResendUserInvitationArgs = {
  payload: RecordIdDto;
};


export type MutationResetPasswordArgs = {
  payload: ResetPasswordDto;
};


export type MutationSendEmailToResetPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationSetPaymentMethodAsDefaultArgs = {
  payload: SetPaymentMethodAsDefaultDto;
};


export type MutationSignInArgs = {
  payload: SignInDto;
};


export type MutationUpdateAddressArgs = {
  payload: UpdateAddressDto;
};


export type MutationUpdateAgentServiceArgs = {
  payload: UpdateAgentServiceDto;
};


export type MutationUpdateAgentWorkingScheduleArgs = {
  payload: UpdateWorkingScheduleDto;
};


export type MutationUpdateAirportServiceArgs = {
  payload: UpdateAirportServiceDto;
};


export type MutationUpdateAuthProfileArgs = {
  payload: UpdateAuthProfileDto;
};


export type MutationUpdateBookingItemArgs = {
  payload: UpdateBookingItemDto;
};


export type MutationUpdateBookingItemExpenseArgs = {
  payload: UpdateBookingItemExpenseDto;
};


export type MutationUpdateBookingItemNoteArgs = {
  payload: UpdateBookingItemNoteDto;
};


export type MutationUpdateBookingItemRatingArgs = {
  payload: UpdateBookingItemRatingDto;
};


export type MutationUpdateBookingItemScheduleArgs = {
  payload: UpdateBookingItemScheduleDto;
};


export type MutationUpdateBusinessCompanyArgs = {
  payload: UpdateBusinessCompanyDto;
};


export type MutationUpdateCategoryArgs = {
  payload: UpdateCategoryDto;
};


export type MutationUpdateContractAirportServiceMappingsArgs = {
  payload: UpdateContractAirportServiceMappingsDto;
};


export type MutationUpdateDiscountArgs = {
  payload: UpdateDiscountDto;
};


export type MutationUpdateExchangeRateArgs = {
  payload: UpdateExchangeRateDto;
};


export type MutationUpdateHolidayArgs = {
  payload: UpdateHolidayDto;
};


export type MutationUpdateInvoiceArgs = {
  payload: UpdateInvoiceDto;
};


export type MutationUpdatePasswordArgs = {
  payload: UpdatePasswordDto;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String']['input'];
  payload: UpdateUserDto;
};


export type MutationUpdateVendorArgs = {
  payload: UpdateVendorDto;
};


export type MutationWithdrawApprovedTransferRequestArgs = {
  payload: WithdrawApprovedTransferRequestDto;
};


export type MutationWithdrawBookingArgs = {
  payload: WithdrawBookingDto;
};

export type NationalHolidayResponseDto = {
  date: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rule?: Maybe<Scalars['String']['output']>;
};

export type PassengerDto = {
  alias?: Maybe<Scalars['String']['output']>;
  carryOnLuggage?: Maybe<Scalars['String']['output']>;
  checkedLuggage?: Maybe<Scalars['String']['output']>;
  classOfService?: Maybe<EClassOfService>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  flightReservationNumber?: Maybe<Scalars['String']['output']>;
  isPrimary?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  specialServices?: Maybe<Array<SpecialServices>>;
  specificLanguage?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type PassengerEntity = {
  alias?: Maybe<Scalars['String']['output']>;
  bookingItemId: Scalars['String']['output'];
  carryOnLuggage?: Maybe<Scalars['Float']['output']>;
  checkedLuggage?: Maybe<Scalars['Float']['output']>;
  classOfService?: Maybe<EClassOfService>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  firstName: Scalars['String']['output'];
  flightReservationNumber?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isPrimary: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  noShow: Scalars['Boolean']['output'];
  specialServices?: Maybe<Array<SpecialServices>>;
  specificLanguage?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type PaymentCredentialEntity = {
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  deletedById?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  providerName: EProviderName;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type PaymentMethodInfo = {
  brand: Scalars['String']['output'];
  last4: Scalars['String']['output'];
  providerName: EProviderName;
};

export type PaymentMethodResponseDto = {
  brand: Scalars['String']['output'];
  expMonth: Scalars['Float']['output'];
  expYear: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  last4: Scalars['String']['output'];
  providerName: EProviderName;
};

export type PaymentMethodsResponseDto = {
  isExistCustomer: Scalars['Boolean']['output'];
  paymentMethods?: Maybe<Array<PaymentMethodResponseDto>>;
};

export type PaymentTransactionEntity = {
  amount: Scalars['Float']['output'];
  amountCaptured: Scalars['Float']['output'];
  bookingId: Scalars['String']['output'];
  captureMethod?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  paymentCredentialId?: Maybe<Scalars['String']['output']>;
  paymentCustomerId: Scalars['String']['output'];
  paymentMethod: Scalars['String']['output'];
  providerName: EProviderName;
  status: Scalars['String']['output'];
  transactionId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type PaymentTransactionsPaginationResponseDto = {
  data: Array<PaymentTransactionEntity>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Policy = {
  pricing: ServicePricing;
  rule: RuleAttributes;
};

export type PreparePublicKeysDto = {
  nonceBase64: Scalars['String']['input'];
};

export type PriceCalculationHistoryDto = {
  agentServiceHistory?: Maybe<AgentServiceHistoryDto>;
  airportServiceHistory: AirportServiceHistoryDto;
  discountHistory?: Maybe<DiscountHistoryDto>;
  holiday?: Maybe<HolidayHistoryDto>;
  scheduleHistories?: Maybe<Array<ScheduleHistoryDto>>;
};

export type PrimaryVendorDto = {
  addresses?: Maybe<Array<AddressEntity>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  paymentCredentialId?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  primaryContactId?: Maybe<Scalars['String']['output']>;
  subdomain: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorCurrency: ECurrency;
  website?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  checkExistCurrencyBySymbol: Array<ExchangeRateyResponseDto>;
  checkExistVendorSubdomain: Scalars['Int']['output'];
  checkVendorInvitationTokenIsValid: Scalars['Float']['output'];
  countPendingContracts: Scalars['Float']['output'];
  getAgentServicesByQuery: AgentServicesPaginationResponseDto;
  getAgentWorkingSchedule: AgentWorkingScheduleEntity;
  getAgentsToAssignRequest: Array<AgentToAssignRequestResponseDto>;
  getAirportServicesByQuery: AirportServicesPaginationResponseDto;
  getAirportsByQuery: AirportsPaginationResponseDto;
  getAirportsForVendorByQuery: AirportsPaginationResponseDto;
  getAlertsByQuery: AlertsPaginationResponseDto;
  getAuthProfile: UserResponseDto;
  getBookingItemDetail: BookingItemDetailResponseDto;
  getBookingItemEventLogsByQuery: EvenLogsPaginationResponseDto;
  getBookingItemNoteDetail: BookingItemNoteResponseDto;
  getBookingItemNotes: Array<BookingItemNoteResponseDto>;
  getBookingItemStats: BookingItemStatsResponseDto;
  getBookingItemsByQuery: BookingItemsPaginationResponseDto;
  getCardAssignmentsByQuery: CardAssignmentsPaginationResponseDto;
  getCategoriesByQuery: CategoriesResponseDto;
  getCheckListByBookingItemId: Array<BookingItemChecklistResponseDto>;
  getCheckListItemDetail: BookingItemChecklistResponseDto;
  getCheckListsByFlightSegmentType: Array<ChecklistEntity>;
  getCitiesByQuery: CitiesPaginationResponseDto;
  getContractsByQuery: ContractsPaginationResponseDto;
  getCountriesByQuery: CountriesPaginationResponseDto;
  getCurrenciesData: Array<CurrenciesDataResponseDto>;
  getCurrencyDetail: ExchangeRateyResponseDto;
  getCustomersForCreateBookingByQuery: UsersPaginationResponseDto;
  getDiscountByCode: DiscountEntity;
  getDiscountsByQuery: DiscountsPaginationResponseDto;
  getExchangeRatesByQuery: ExchangeRatePaginationResponseDto;
  getExpensesByBookingItemId: Array<BookingItemExpenseResponseDto>;
  getHolidaysByQuery: HolidaysResponseDto;
  getInvoicesByQuery: InvoicesPaginationResponseDto;
  getNationalHolidaysByCountryId: Array<NationalHolidayResponseDto>;
  getOfferorAirportServicesByQuery: AirportServicesPaginationResponseDto;
  getPassengersByBookingItemId: Array<PassengerEntity>;
  getPayaAccountFormLink: Scalars['String']['output'];
  getPaymentCredentials: Array<PaymentCredentialEntity>;
  getPaymentMethods: PaymentMethodsResponseDto;
  getPaymentTransactionsByQuery: PaymentTransactionsPaginationResponseDto;
  getRequestQuotesByQuery: RequestQuotesPaginationResponseDto;
  getServicesByFlightNumber: Array<FlightSegmentServiceResponseDto>;
  getServicesByManual: Array<FlightSegmentServiceResponseDto>;
  getServicesByScheduleId: Array<FlightSegmentServiceResponseDto>;
  getServicesByUserInfo: Array<FlightSegmentServiceResponseDto>;
  getSignedUrl: Scalars['String']['output'];
  getStripePublicKey: Scalars['String']['output'];
  getUnbilledInvoiceItemsByQuery: InvoiceItemsPaginationResponseDto;
  getUserInvitationsByQuery: UserInvitationsPaginationResponseDto;
  getUsersByQuery: UsersPaginationResponseDto;
  getVendorConnectionsByQuery: VendorConnectionsPaginationResponseDto;
  getVendorInformation: VendorInformationResponseDto;
  getWithdrawPriceInfo: Array<WithdrawPriceInfoResponseDto>;
  searchFlightSchedules: FlightSchedulesPaginationResponseDto;
};


export type QueryCheckExistCurrencyBySymbolArgs = {
  args: CheckExistCurrencyBySymbolDto;
};


export type QueryCheckExistVendorSubdomainArgs = {
  subdomain: Scalars['String']['input'];
};


export type QueryCheckVendorInvitationTokenIsValidArgs = {
  token: Scalars['String']['input'];
};


export type QueryGetAgentServicesByQueryArgs = {
  args: GetAgentServicesByQueryDto;
};


export type QueryGetAgentsToAssignRequestArgs = {
  args: GetAgentsToAssignRequestDto;
};


export type QueryGetAirportServicesByQueryArgs = {
  args: GetAirportServicesByQuery;
};


export type QueryGetAirportsByQueryArgs = {
  args: GetAirportsByQueryDto;
};


export type QueryGetAirportsForVendorByQueryArgs = {
  args: GetAirportsForVendorByQuery;
};


export type QueryGetAlertsByQueryArgs = {
  args: GetAlertsByQuery;
};


export type QueryGetBookingItemDetailArgs = {
  payload: RecordIdDto;
};


export type QueryGetBookingItemEventLogsByQueryArgs = {
  args: GetEventLogsByQuery;
};


export type QueryGetBookingItemNoteDetailArgs = {
  payload: RecordIdDto;
};


export type QueryGetBookingItemNotesArgs = {
  payload: GetBookingItemNotesDto;
};


export type QueryGetBookingItemStatsArgs = {
  args: GetBookingItemStatsDto;
};


export type QueryGetBookingItemsByQueryArgs = {
  args: GetBookingItemsByQueryDto;
};


export type QueryGetCardAssignmentsByQueryArgs = {
  args: GetRecordsPaginationDto;
};


export type QueryGetCategoriesByQueryArgs = {
  args: GetCategoriesByQueryDto;
};


export type QueryGetCheckListByBookingItemIdArgs = {
  payload: GetAllBookingItemChecklistsDto;
};


export type QueryGetCheckListItemDetailArgs = {
  payload: RecordIdDto;
};


export type QueryGetCheckListsByFlightSegmentTypeArgs = {
  payload: GetChecklistsByFlightSegmentTypeDto;
};


export type QueryGetCitiesByQueryArgs = {
  args: GetCitiesByQueryDto;
};


export type QueryGetContractsByQueryArgs = {
  args: GetContractsByQuery;
};


export type QueryGetCountriesByQueryArgs = {
  args: GetRecordsPaginationDto;
};


export type QueryGetCurrencyDetailArgs = {
  payload: RecordIdDto;
};


export type QueryGetCustomersForCreateBookingByQueryArgs = {
  params: GetRecordsPaginationDto;
};


export type QueryGetDiscountByCodeArgs = {
  payload: GetDiscountByCodeDto;
};


export type QueryGetDiscountsByQueryArgs = {
  args: GetDiscountsByQueryDto;
};


export type QueryGetExchangeRatesByQueryArgs = {
  args: GetExchangeRatesByQueryDto;
};


export type QueryGetExpensesByBookingItemIdArgs = {
  payload: RecordIdDto;
};


export type QueryGetHolidaysByQueryArgs = {
  params: GetHolidaysByQueryDto;
};


export type QueryGetInvoicesByQueryArgs = {
  args: GetInvoicesByQueryDto;
};


export type QueryGetNationalHolidaysByCountryIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetOfferorAirportServicesByQueryArgs = {
  args: GetOfferorAirportServicesByQuery;
};


export type QueryGetPassengersByBookingItemIdArgs = {
  payload: RecordIdDto;
};


export type QueryGetPaymentCredentialsArgs = {
  vendorId: Scalars['String']['input'];
};


export type QueryGetPaymentMethodsArgs = {
  payload: GetPaymentMethodsDto;
};


export type QueryGetPaymentTransactionsByQueryArgs = {
  payload: GetPaymentTransactionsByQueryDto;
};


export type QueryGetRequestQuotesByQueryArgs = {
  args: GetRequestQuotesByQueryDto;
};


export type QueryGetServicesByFlightNumberArgs = {
  query: GetServicesByFlightNumberDto;
};


export type QueryGetServicesByManualArgs = {
  query: GetServicesByFlightScheduleIdDto;
};


export type QueryGetServicesByScheduleIdArgs = {
  query: GetServicesByFlightScheduleIdDto;
};


export type QueryGetServicesByUserInfoArgs = {
  query: GetServicesByManualInfoDto;
};


export type QueryGetSignedUrlArgs = {
  payload: GetSignedUrlDto;
};


export type QueryGetUnbilledInvoiceItemsByQueryArgs = {
  args: GetUnbilledInvoiceItemsByQueryDto;
};


export type QueryGetUserInvitationsByQueryArgs = {
  params: GetUserInvitationsByQueryDto;
};


export type QueryGetUsersByQueryArgs = {
  params: GetUsersByQueryDto;
};


export type QueryGetVendorConnectionsByQueryArgs = {
  args: GetVendorConnectionsByQuery;
};


export type QueryGetWithdrawPriceInfoArgs = {
  payload: GetWithdrawPriceInfoDto;
};


export type QuerySearchFlightSchedulesArgs = {
  query: GetFlightSchedulesByQueryDto;
};

export type RateAttributes = {
  from: Scalars['Float']['output'];
  offHours: Scalars['Float']['output'];
  offHoursInternational: Scalars['Float']['output'];
  regular: Scalars['Float']['output'];
  regularInternational: Scalars['Float']['output'];
  to: Scalars['Float']['output'];
};

export type RateAttributesInput = {
  from: Scalars['Float']['input'];
  offHours: Scalars['Float']['input'];
  offHoursInternational: Scalars['Float']['input'];
  regular: Scalars['Float']['input'];
  regularInternational: Scalars['Float']['input'];
  to: Scalars['Float']['input'];
};

export type RecordIdDto = {
  id: Scalars['String']['input'];
};

export type RefreshTokenDto = {
  refreshToken: Scalars['String']['input'];
};

export type RegisterBusinessCompanyDto = {
  company: CreateBusinessCompanyDto;
  companyAddress: CreateAddressDto;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  user: UserAttributesDto;
  userAddress: CreateAddressDto;
};

export type RegisterCustomerDto = {
  address?: InputMaybe<CreateAddressDto>;
  paymentMethodId: Scalars['String']['input'];
  user: UserAttributesDto;
};

export type RegisterInvitationAccountDto = {
  token: Scalars['String']['input'];
  user: UserAttributesMissingEmailDto;
  userAddress?: InputMaybe<CreateAddressDto>;
};

export type RegisterVendorAndAccountDto = {
  token: Scalars['String']['input'];
  user: UserAttributesMissingEmailDto;
  userAddress?: InputMaybe<CreateAddressDto>;
  vendor?: InputMaybe<RegisterVendorDto>;
  vendorAddress?: InputMaybe<CreateAddressDto>;
};

export type RegisterVendorDto = {
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subdomain: Scalars['String']['input'];
  vendorCurrency?: InputMaybe<ECurrency>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type RemoveApprovedAgentDto = {
  approvedAgentId: Scalars['String']['input'];
  bookingItemId: Scalars['String']['input'];
};

export type RemoveApprovedVendorDto = {
  transferRequestId: Scalars['String']['input'];
};

export type RemovePaymentMethodDto = {
  paymentMethodId: Scalars['String']['input'];
};

export type RequestQuoteAttributesDto = {
  airportCode: Scalars['String']['input'];
  arrivalFlightSchedule?: InputMaybe<FlightScheduleInput>;
  cityName: Scalars['String']['input'];
  departureFlightSchedule?: InputMaybe<FlightScheduleInput>;
  flightSegmentType: EFlightSegmentType;
};

export type RequestQuoteEntity = {
  airportCode: Scalars['String']['output'];
  arrivalFlightSchedule?: Maybe<FlightSchedule>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  departureFlightSchedule?: Maybe<FlightSchedule>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  flightSegmentType: EFlightSegmentType;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type RequestQuotesPaginationResponseDto = {
  data: Array<RequestQuoteEntity>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ResendInviteVendorDto = {
  email: Scalars['String']['input'];
};

export type ResetPasswordDto = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type ResponsePublicKeysDto = {
  cacheKey: Scalars['String']['output'];
  ecdhPublicKey: Scalars['String']['output'];
  ecdsaPublicKey: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type RoleEntity = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  scopes?: Maybe<Array<ScopeEntity>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RuleAttributes = {
  hoursAllowance: Scalars['Int']['output'];
  offHoursFrom: Scalars['Int']['output'];
  offHoursTo: Scalars['Int']['output'];
  passengerAllowance?: Maybe<Scalars['Int']['output']>;
  passengerPerAgentMax: Scalars['Int']['output'];
};

export type RuleAttributesInput = {
  hoursAllowance: Scalars['Int']['input'];
  offHoursFrom: Scalars['Int']['input'];
  offHoursTo: Scalars['Int']['input'];
  passengerAllowance?: InputMaybe<Scalars['Int']['input']>;
  passengerPerAgentMax: Scalars['Int']['input'];
};

export type ScheduleHistoryDto = {
  arrival?: Maybe<TimeScheduleDto>;
  createdAt?: Maybe<Scalars['String']['output']>;
  departure?: Maybe<TimeScheduleDto>;
  note?: Maybe<Scalars['String']['output']>;
};

export type ScopeEntity = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ServiceConditions = {
  isHoliday?: Maybe<Scalars['Boolean']['output']>;
  isInternational?: Maybe<Scalars['Boolean']['output']>;
  isMaxPassengerPerAgentExceeded?: Maybe<Scalars['Boolean']['output']>;
  isOffHours?: Maybe<Scalars['Boolean']['output']>;
  isPassengerAllowanceExceeded?: Maybe<Scalars['Boolean']['output']>;
};

export type ServicePricing = {
  fees: FeeAttributes;
  rates: Array<RateAttributes>;
};

export type ServicePricingHistory = {
  cancelation: Array<Cancelation>;
  fees: FeeAttributes;
  rates: Array<RateAttributes>;
};

export type SetPaymentMethodAsDefaultDto = {
  paymentMethodId: Scalars['String']['input'];
};

export type SignInDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignInResponseDto = {
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export enum SpecialServices {
  AgentWithSpecificLanguage = 'AGENT_WITH_SPECIFIC_LANGUAGE',
  AirlineLoungeAccess = 'AIRLINE_LOUNGE_ACCESS',
  Animal = 'ANIMAL',
  Firearm = 'FIREARM',
  GolfCart = 'GOLF_CART',
  SignLanguageHelp = 'SIGN_LANGUAGE_HELP',
  VatAssistance = 'VAT_ASSISTANCE',
  Wheelchair = 'WHEELCHAIR'
}

export type SubBookingDto = {
  bookingItems: Array<SubBookingItemDto>;
  bookingPaymentStatus: EBookingPaymentStatus;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<ECurrency>;
  customer: UserResponseDto;
  customerId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  discountId?: Maybe<Scalars['String']['output']>;
  displayId: Scalars['String']['output'];
  holdFundExpirationDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  passengerQuantity: Scalars['Float']['output'];
  paymentMethodInfo?: Maybe<PaymentMethodInfo>;
  total: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type SubBookingItemDto = {
  airportServiceId: Scalars['String']['output'];
  approvedAgentId?: Maybe<Scalars['String']['output']>;
  arrivalDateTime?: Maybe<Scalars['DateTime']['output']>;
  arrivalFlightSchedule?: Maybe<FlightSchedule>;
  autoConfirmAssignRequest: Scalars['Boolean']['output'];
  autoConfirmTransferRequest: Scalars['Boolean']['output'];
  bookingId: Scalars['String']['output'];
  bookingItemExpenses: Array<BookingItemExpenseEntity>;
  childBookingItemId?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  completedById?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<ECurrency>;
  customerId: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  departureDateTime?: Maybe<Scalars['DateTime']['output']>;
  departureFlightSchedule?: Maybe<FlightSchedule>;
  displayId: Scalars['String']['output'];
  emergencyContacts?: Maybe<Array<EmergencyContact>>;
  expiredReason?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  invoiceItem: InvoiceItemEntity;
  isViewed: Scalars['Boolean']['output'];
  lastChildBookingItemId?: Maybe<Scalars['String']['output']>;
  level: Scalars['Float']['output'];
  parentBookingItemId?: Maybe<Scalars['String']['output']>;
  passengers: Array<PassengerEntity>;
  price: Scalars['Float']['output'];
  priceCalculationHistory: PriceCalculationHistoryDto;
  rating: Scalars['Float']['output'];
  rootBookingItemId?: Maybe<Scalars['String']['output']>;
  status: EBookingItemStatus;
  transactionId?: Maybe<Scalars['String']['output']>;
  transportInformation?: Maybe<TransportInformation>;
  tripId?: Maybe<Scalars['String']['output']>;
  type: EFlightSegmentType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
  withdrawReason?: Maybe<Scalars['String']['output']>;
  withdrawnById?: Maybe<Scalars['String']['output']>;
  withdrawnParentBookingItemId?: Maybe<Scalars['String']['output']>;
};

export type SubFlightSegmentServiceDto = {
  airlineCode: Scalars['String']['output'];
  airlineName: Scalars['String']['output'];
  airplaneName?: Maybe<Scalars['String']['output']>;
  arrivalAirportCode: Scalars['String']['output'];
  arrivalAirportName: Scalars['String']['output'];
  arrivalAirportTimezone: Scalars['String']['output'];
  arrivalCity: Scalars['String']['output'];
  arrivalCountryCode: Scalars['String']['output'];
  arrivalTerminal?: Maybe<Scalars['String']['output']>;
  arrivalTime: Scalars['DateTime']['output'];
  departureAirportCode: Scalars['String']['output'];
  departureAirportName: Scalars['String']['output'];
  departureAirportTimezone: Scalars['String']['output'];
  departureCity: Scalars['String']['output'];
  departureCountryCode: Scalars['String']['output'];
  departureTerminal?: Maybe<Scalars['String']['output']>;
  departureTime: Scalars['DateTime']['output'];
  flight: Scalars['String']['output'];
  flightNumber: Scalars['String']['output'];
  stops: Scalars['Float']['output'];
};

export type TerminalAttributesDto = {
  current?: Maybe<Scalars['String']['output']>;
  previous?: Maybe<Scalars['String']['output']>;
};

export type TimeLimitAttributes = {
  agentWithdrawal: Scalars['Float']['output'];
  connectionLimitMax: Scalars['Int']['output'];
  connectionLimitMin: Scalars['Int']['output'];
  sameDayLimit: Scalars['Int']['output'];
};

export type TimeLimitAttributesInput = {
  agentWithdrawal?: Scalars['Float']['input'];
  connectionLimitMax: Scalars['Int']['input'];
  connectionLimitMin: Scalars['Int']['input'];
  sameDayLimit: Scalars['Int']['input'];
};

export type TimeScheduleDto = {
  arrivalDateTime?: Maybe<Scalars['String']['output']>;
  departureDateTime?: Maybe<Scalars['String']['output']>;
};

export type TransferRequestEntity = {
  bookingItemId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdById: Scalars['String']['output'];
  currency: ECurrency;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  receiverVendorId: Scalars['String']['output'];
  status: ETransferRequestStatus;
  transferAirportServiceId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
  withdrawReason?: Maybe<Scalars['String']['output']>;
};

export type TransferRequestResponseDto = {
  bookingItemId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: UserResponseDto;
  createdById: Scalars['String']['output'];
  currency: ECurrency;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  receiverVendor: VendorEntity;
  receiverVendorId: Scalars['String']['output'];
  status: ETransferRequestStatus;
  transferAirportServiceId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
  withdrawReason?: Maybe<Scalars['String']['output']>;
};

export type TransportInformation = {
  arrangedBy: Scalars['String']['output'];
  carMaker?: Maybe<Scalars['String']['output']>;
  carModal?: Maybe<Scalars['String']['output']>;
  carPlates?: Maybe<Scalars['String']['output']>;
  carType?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  confirmationNumber?: Maybe<Scalars['String']['output']>;
  contact: Array<ContactTransportInformation>;
  phone: Scalars['String']['output'];
};

export type TransportInformationInput = {
  arrangedBy: Scalars['String']['input'];
  carMaker?: InputMaybe<Scalars['String']['input']>;
  carModal?: InputMaybe<Scalars['String']['input']>;
  carPlates?: InputMaybe<Scalars['String']['input']>;
  carType?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  confirmationNumber?: InputMaybe<Scalars['String']['input']>;
  contact: Array<ContactTransportInformationInput>;
  phone: Scalars['String']['input'];
};

export type TripResponseDto = {
  alerts: Array<AlertEntity>;
  arrivalActualGateDateTime?: Maybe<Scalars['String']['output']>;
  arrivalBaggage?: Maybe<Scalars['String']['output']>;
  arrivalFlightStatus: EFlightStatus;
  arrivalGate?: Maybe<Scalars['String']['output']>;
  bookingItems: Array<BookingItemEntity>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  departureActualGateDateTime?: Maybe<Scalars['String']['output']>;
  departureFlightStatus: EFlightStatus;
  departureGate?: Maybe<Scalars['String']['output']>;
  flightStatusHistories: Array<FlightStatusHistoryDto>;
  id: Scalars['String']['output'];
  importNotes?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UpdateAddressDto = {
  addressType?: InputMaybe<EAddressType>;
  cityName?: InputMaybe<Scalars['String']['input']>;
  countryName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  stateName?: InputMaybe<Scalars['String']['input']>;
  street: Scalars['String']['input'];
};

export type UpdateAgentServiceDto = {
  airportIds: Array<Scalars['String']['input']>;
  currency: ECurrency;
  fees?: InputMaybe<FeeAttributesInput>;
  id: Scalars['String']['input'];
  rates?: InputMaybe<Array<RateAttributesInput>>;
  rule?: InputMaybe<RuleAttributesInput>;
  serviceModel: EAgentServiceModel;
};

export type UpdateAirportServiceDto = {
  airportId: Scalars['String']['input'];
  cancelation?: InputMaybe<Array<CancelationInput>>;
  currency: ECurrency;
  description?: InputMaybe<Scalars['String']['input']>;
  fees: FeeAttributesInput;
  highlights: Array<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  primaryCategory: ECategory;
  primaryCategoryName: Scalars['String']['input'];
  rates: Array<RateAttributesInput>;
  rule: RuleAttributesInput;
  serviceModel: EServiceModel;
  serviceType: EFlightSegmentType;
  timeLimit: TimeLimitAttributesInput;
};

export type UpdateAuthProfileDto = {
  address?: InputMaybe<CreateAddressDto>;
  user: UpdateUserDto;
};

export type UpdateBookingItemDto = {
  emergencyContacts?: InputMaybe<Array<EmergencyContactInput>>;
  id: Scalars['String']['input'];
  passengers?: InputMaybe<Array<UpdatePassengerDto>>;
  transportInformation?: InputMaybe<TransportInformationInput>;
};

export type UpdateBookingItemExpenseDto = {
  hours?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  note?: InputMaybe<Scalars['String']['input']>;
  passengers?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Float']['input'];
  type: ETypeExpense;
};

export type UpdateBookingItemNoteDto = {
  bookingItemChecklistId?: InputMaybe<Scalars['String']['input']>;
  bookingItemExpenseId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  note: Scalars['String']['input'];
  type: ENoteType;
};

export type UpdateBookingItemRatingDto = {
  id: Scalars['String']['input'];
};

export type UpdateBookingItemScheduleDto = {
  arrivalSchedule?: InputMaybe<UpdateFlightScheduleDto>;
  departureSchedule?: InputMaybe<UpdateFlightScheduleDto>;
  id: Scalars['String']['input'];
  note: Scalars['String']['input'];
  type: EFlightSegmentType;
};

export type UpdateBusinessCompanyDto = {
  address?: InputMaybe<CreateAddressDto>;
  image?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryDto = {
  category: ECategory;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateContractAirportServiceMappingsDto = {
  updateContractAirportServiceMappings: Array<MappingContractAirportServiceDto>;
};

export type UpdateDiscountDto = {
  allowUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  code: Scalars['String']['input'];
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  maxUseQuantity?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  percent?: InputMaybe<Scalars['Float']['input']>;
  range: EDiscountRange;
  startedAt: Scalars['DateTime']['input'];
  type: EDiscountType;
};

export type UpdateExchangeRateDto = {
  id: Scalars['String']['input'];
  rate: Scalars['Float']['input'];
};

export type UpdateFlightScheduleDto = {
  arrivalDateTime?: InputMaybe<Scalars['String']['input']>;
  departureDateTime?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHolidayDto = {
  airportIds?: InputMaybe<Array<Scalars['String']['input']>>;
  belongToCountryId?: InputMaybe<Scalars['String']['input']>;
  cityIds?: InputMaybe<Array<Scalars['String']['input']>>;
  countryIds?: InputMaybe<Array<Scalars['String']['input']>>;
  coverageLevel: ECoverageLevel;
  description?: InputMaybe<Scalars['String']['input']>;
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  isAnnual: Scalars['Boolean']['input'];
  isRange: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateInvoiceDto = {
  id: Scalars['String']['input'];
  invoiceMessage?: InputMaybe<Scalars['String']['input']>;
  paymentInfo?: InputMaybe<Scalars['String']['input']>;
  paymentMethod: EPaymentMethodType;
};

export type UpdatePassengerDto = {
  alias?: InputMaybe<Scalars['String']['input']>;
  carryOnLuggage?: InputMaybe<Scalars['Int']['input']>;
  checkedLuggage?: InputMaybe<Scalars['Int']['input']>;
  classOfService?: InputMaybe<EClassOfService>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  firstName: Scalars['String']['input'];
  flightReservationNumber?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  lastName: Scalars['String']['input'];
  noShow?: InputMaybe<Scalars['Boolean']['input']>;
  specialServices?: InputMaybe<Array<SpecialServices>>;
  specificLanguage?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type UpdatePasswordDto = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateUserDto = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  paymentMethodIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateVendorConnectionStatusDto = {
  id: Scalars['String']['input'];
  status: EVendorConnectionStatus;
};

export type UpdateVendorDto = {
  address?: InputMaybe<CreateAddressDto>;
  image?: InputMaybe<Scalars['String']['input']>;
  paymentCredentialId?: InputMaybe<Scalars['String']['input']>;
  vendorCurrency?: InputMaybe<ECurrency>;
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkingScheduleDto = {
  fri: DayWorkingScheduleInput;
  mon: DayWorkingScheduleInput;
  sat: DayWorkingScheduleInput;
  sun: DayWorkingScheduleInput;
  thu: DayWorkingScheduleInput;
  tue: DayWorkingScheduleInput;
  wed: DayWorkingScheduleInput;
};

export type UserAttributesDto = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserAttributesMissingEmailDto = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserEntity = {
  avatar?: Maybe<Scalars['String']['output']>;
  businessCompanyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  role: RoleEntity;
  roleId: Scalars['Int']['output'];
  totalBookingItemCompleted: Scalars['Float']['output'];
  totalBookingItemRating: Scalars['Float']['output'];
  totalRating: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type UserInvitationEntity = {
  businessCompanyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: UserEntity;
  createdById: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  roleId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorId: Scalars['String']['output'];
};

export type UserInvitationsPaginationResponseDto = {
  data: Array<UserInvitationEntity>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type UserResponseDto = {
  addresses?: Maybe<Array<AddressEntity>>;
  agentServices?: Maybe<Array<AgentServiceResponseDto>>;
  avatar?: Maybe<Scalars['String']['output']>;
  businessCompany?: Maybe<BusinessCompanyResponseDto>;
  businessCompanyId?: Maybe<Scalars['String']['output']>;
  cardAssignments?: Maybe<Array<CardAssignmentEntity>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  rating: Scalars['Float']['output'];
  role: RoleEntity;
  roleId: Scalars['Int']['output'];
  totalBookingItemCompleted: Scalars['Float']['output'];
  totalBookingItemRating: Scalars['Float']['output'];
  totalRating: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendor?: Maybe<VendorResponseDto>;
  vendorId: Scalars['String']['output'];
};

export type UsersPaginationResponseDto = {
  data: Array<UserResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VendorConnectionEntity = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  isFavoriteReceiver: Scalars['Boolean']['output'];
  isFavoriteSender: Scalars['Boolean']['output'];
  receiverVendorEmail?: Maybe<Scalars['String']['output']>;
  receiverVendorId?: Maybe<Scalars['String']['output']>;
  senderVendorId: Scalars['String']['output'];
  status: EVendorConnectionStatus;
  tokenTimestamp?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VendorConnectionResponseDto = {
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  isFavoriteReceiver: Scalars['Boolean']['output'];
  isFavoriteSender: Scalars['Boolean']['output'];
  receiverVendor?: Maybe<VendorResponseDto>;
  receiverVendorEmail?: Maybe<Scalars['String']['output']>;
  receiverVendorId?: Maybe<Scalars['String']['output']>;
  senderVendor: VendorResponseDto;
  senderVendorId: Scalars['String']['output'];
  status: EVendorConnectionStatus;
  tokenTimestamp?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type VendorConnectionsPaginationResponseDto = {
  data: Array<VendorConnectionResponseDto>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VendorEntity = {
  addresses?: Maybe<Array<AddressEntity>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  paymentCredentialId?: Maybe<Scalars['String']['output']>;
  primaryContactId?: Maybe<Scalars['String']['output']>;
  subdomain: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorCurrency: ECurrency;
  website?: Maybe<Scalars['String']['output']>;
};

export type VendorInformationResponseDto = {
  activePaymentCredential?: Maybe<PaymentCredentialEntity>;
  addresses?: Maybe<Array<AddressEntity>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  paymentCredentialId?: Maybe<Scalars['String']['output']>;
  primaryContactId?: Maybe<Scalars['String']['output']>;
  subdomain: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorCurrency: ECurrency;
  website?: Maybe<Scalars['String']['output']>;
};

export type VendorResponseDto = {
  addresses?: Maybe<Array<AddressEntity>>;
  airportServices?: Maybe<Array<AirportServiceResponseDto>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  paymentCredentialId?: Maybe<Scalars['String']['output']>;
  primaryContact: UserEntity;
  primaryContactId?: Maybe<Scalars['String']['output']>;
  subdomain: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  vendorCurrency: ECurrency;
  website?: Maybe<Scalars['String']['output']>;
};

export type WaiverAttributesDto = {
  issuingAirlineCode?: Maybe<Scalars['String']['output']>;
  issuingAirlineFsCode?: Maybe<Scalars['String']['output']>;
  issuingAirlineIataCode?: Maybe<Scalars['String']['output']>;
  waiverType?: Maybe<Scalars['String']['output']>;
};

export type WithdrawApprovedTransferRequestDto = {
  bookingItemId: Scalars['String']['input'];
  withdrawReason: Scalars['String']['input'];
};

export type WithdrawBookingDto = {
  id: Scalars['String']['input'];
  withdrawReason?: InputMaybe<Scalars['String']['input']>;
};

export type WithdrawPriceInfoResponseDto = {
  arrivalFlightSchedule?: Maybe<FlightSchedule>;
  departureFlightSchedule?: Maybe<FlightSchedule>;
  displayId: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  type: EFlightSegmentType;
  withdrawPrice: Scalars['Float']['output'];
};

export type SignInMutationVariables = Exact<{
  payload: SignInDto;
}>;


export type SignInMutation = { signIn: { accessToken: string, refreshToken: string } };

export type RefreshTokenMutationVariables = Exact<{
  payload: RefreshTokenDto;
}>;


export type RefreshTokenMutation = { refreshToken: { accessToken: string, refreshToken: string } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const SignInDocument = new TypedDocumentString(`
    mutation SignIn($payload: SignInDto!) {
  signIn(payload: $payload) {
    accessToken
    refreshToken
  }
}
    `) as unknown as TypedDocumentString<SignInMutation, SignInMutationVariables>;
export const RefreshTokenDocument = new TypedDocumentString(`
    mutation RefreshToken($payload: RefreshTokenDto!) {
  refreshToken(payload: $payload) {
    accessToken
    refreshToken
  }
}
    `) as unknown as TypedDocumentString<RefreshTokenMutation, RefreshTokenMutationVariables>;