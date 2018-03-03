import {Injectable} from '@angular/core';
import {UserListService} from '../user-list/user-list.service'
import {TagInclusions} from '../shared/TagInclusions'
import {UserDataCombined} from '../user-profile/user-profile.service'
import { DbListReadOnly} from '../db.service'
import {UserInterests} from '../user-profile/user-interests'
import {UserMatched, UserMatcherService} from '../user-matcher.service'

@Injectable()
export class TopicsDetailsService {

  constructor(
    private userListService: UserListService,
    private userMatcherService: UserMatcherService
  ) {
  }

  getUsersWithTopic(topicId: string): DbListReadOnly<UserDataCombined> {
    return this.userListService.listUserDataCombined().map((users: Array<UserDataCombined>) => {
      return users.filter((user: UserDataCombined) => {
        let interests = user.interests;
        return UserInterests.hasTopicId(interests, topicId);
      });
    });
  }

  getMatchedUsersWithTopic(topicId: string): DbListReadOnly<UserMatched> {
    return this.userMatcherService.listUsersSortedFiltered( null, (user) => {
      return UserInterests.hasTopicId(user.interests, topicId);
    });
  }
}