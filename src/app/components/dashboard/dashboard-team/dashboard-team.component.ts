import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  profilePicture: string;
  email: string;
  department: string;
  location: string;
  joinedDate: Date;
  skills: string[];
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  status: 'available' | 'in-meeting' | 'away' | 'offline';
  currentProject?: string;
}

@Component({
  selector: 'app-dashboard-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-team.component.html',
  styleUrl: './dashboard-team.component.css'
})
export class DashboardTeamComponent implements OnInit {
  currentUser: TeamMember = {
    id: 1,
    name: 'Alex Morgan',
    designation: 'Senior Frontend Developer',
    profilePicture: 'https://live.staticflickr.com/3341/3484878448_bedd347e8d_z.jpg',
    email: 'alex.morgan@company.com',
    department: 'Engineering',
    location: 'New York, USA',
    joinedDate: new Date('2022-06-15'),
    skills: ['Angular', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    socialLinks: {
      linkedin: 'linkedin.com/in/alexmorgan',
      github: 'github.com/alexmorgan',
      twitter: 'twitter.com/alexmorgan'
    },
    status: 'available',
    currentProject: 'Project Phoenix'
  };

  teamMembers: TeamMember[] = [
    {
      id: 2,
      name: 'Sarah Chen',
      designation: 'Product Manager',
      profilePicture: 'https://live.staticflickr.com/7344/11095886075_48309822a3_z.jpg',
      email: 'sarah.chen@company.com',
      department: 'Product',
      location: 'San Francisco, USA',
      joinedDate: new Date('2021-03-10'),
      skills: ['Product Strategy', 'Agile', 'User Research', 'Roadmapping'],
      socialLinks: {
        linkedin: 'linkedin.com/in/sarachen'
      },
      status: 'in-meeting',
      currentProject: 'Project Phoenix'
    },
    {
      id: 3,
      name: 'James Wilson',
      designation: 'Backend Developer',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTiGlASQN2aBayDa3IennhcpPOMJV8tyCcOw&s',
      email: 'james.wilson@company.com',
      department: 'Engineering',
      location: 'London, UK',
      joinedDate: new Date('2023-01-20'),
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
      socialLinks: {
        linkedin: 'linkedin.com/in/jameswilson',
        github: 'github.com/jwilson'
      },
      status: 'available',
      currentProject: 'Project Atlas'
    }
  ];

  getStatusColor(status: 'available' | 'in-meeting' | 'away' | 'offline'): string {
    const colors = {
      'available': 'bg-green-500',
      'in-meeting': 'bg-yellow-500',
      'away': 'bg-orange-500',
      'offline': 'bg-gray-500'
    };
    return colors[status] || 'bg-gray-500';
  }

  ngOnInit(): void {
    // Fetch team data from service
  }
}

