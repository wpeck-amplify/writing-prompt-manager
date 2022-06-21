import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EventsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PromptsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WritingGroupsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WritingGroupsUsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Events {
  readonly id: string;
  readonly eventDate?: string | null;
  readonly EventPrompts?: Prompts | null;
  readonly EventWritingGroups?: WritingGroups | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventsEventPromptsId?: string | null;
  readonly eventsEventWritingGroupsId?: string | null;
  constructor(init: ModelInit<Events, EventsMetaData>);
  static copyOf(source: Events, mutator: (draft: MutableModel<Events, EventsMetaData>) => MutableModel<Events, EventsMetaData> | void): Events;
}

export declare class Prompts {
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Prompts, PromptsMetaData>);
  static copyOf(source: Prompts, mutator: (draft: MutableModel<Prompts, PromptsMetaData>) => MutableModel<Prompts, PromptsMetaData> | void): Prompts;
}

export declare class WritingGroups {
  readonly id: string;
  readonly groupName?: string | null;
  readonly WritingGroupUsers?: (WritingGroupsUsers | null)[] | null;
  readonly createdOn?: string | null;
  readonly updatedOn?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WritingGroups, WritingGroupsMetaData>);
  static copyOf(source: WritingGroups, mutator: (draft: MutableModel<WritingGroups, WritingGroupsMetaData>) => MutableModel<WritingGroups, WritingGroupsMetaData> | void): WritingGroups;
}

export declare class Users {
  readonly id: string;
  readonly writinggroupss?: (WritingGroupsUsers | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class WritingGroupsUsers {
  readonly id: string;
  readonly writingGroups: WritingGroups;
  readonly users: Users;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<WritingGroupsUsers, WritingGroupsUsersMetaData>);
  static copyOf(source: WritingGroupsUsers, mutator: (draft: MutableModel<WritingGroupsUsers, WritingGroupsUsersMetaData>) => MutableModel<WritingGroupsUsers, WritingGroupsUsersMetaData> | void): WritingGroupsUsers;
}