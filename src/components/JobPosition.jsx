import PropTypes from "prop-types";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Stack } from "../ui/Stack";

export function JobPosition({
  id,
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  conrtact,
  location,
  languages,
  tools,
}) {
  const bages = [].concat(role, level, ...languages, ...tools);

  return (
    <Card isFeatured={featured}>
      <div className="job-position">
        <div className="job-position-info">
          <img className="job-position-avatar" src={logo} alt={company} />
          <div className="job-position-body">
            <div className="job-position-company">
              <h3>{company}</h3>
              {(isNew || featured) && (
                <Stack>
                  {isNew && (
                    <Badge variant="rounded" colorScheme="primary">
                      NEW
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="rounded" colorScheme="dark">
                      FEATURED
                    </Badge>
                  )}
                </Stack>
              )}
            </div>
            <h2 className="job-position-title">{position}</h2>
            <Stack>
              <div className="job-position-meta">{postedAt}</div>
              <div className="job-position-meta">{conrtact}</div>
              <div className="job-position-meta">{location}</div>
            </Stack>
          </div>
        </div>
        <Stack>
          {bages.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </Stack>
      </div>
    </Card>
  );
}

JobPosition.propTypes = {
  id: PropTypes.number,
  company: PropTypes.string,
  logo: PropTypes.string,
  new: PropTypes.bool,
  featured: PropTypes.bool,
  position: PropTypes.string,
  role: PropTypes.string,
  level: PropTypes.string,
  postedAt: PropTypes.string,
  conrtact: PropTypes.string,
  location: PropTypes.string,
  languages: PropTypes.arrayOf(PropTypes.string),
  tools: PropTypes.arrayOf(PropTypes.string),
};
