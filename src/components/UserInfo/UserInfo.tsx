import { ReactComponent as CompanyIcon } from 'assets/icom-company.svg';
import { ReactComponent as LocationIcon } from 'assets/icom-location.svg';
import { ReactComponent as TwitterIcon } from 'assets/icom-twitter.svg';
import { ReactComponent as BlogIcon } from 'assets/icom-website.svg';

import { LocalGithubUser } from 'types';
import { InfoItem, InfoItemProps } from 'components/InfoItem';

import styles from './UserInfo.module.scss';

interface UserInfoProps
	extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {}

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
	const items: InfoItemProps[] = [
		{
			icon: <LocationIcon />,
			text: location,
		},
		{
			icon: <BlogIcon />,
			text: blog,
			isLink: true,
		},
		{
			icon: <TwitterIcon />,
			text: twitter,
		},
		{
			icon: <CompanyIcon />,
			text: company,
		},
	];

	return (
		<div className={styles.userInfo}>
			{items.map((item, index) => (
				<InfoItem {...item} key={index} />
			))}
		</div>
	);
};
