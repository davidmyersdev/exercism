use time::{Duration, PrimitiveDateTime as DateTime};

// https://docs.rs/time/latest/time/
// https://docs.rs/time/latest/time/struct.Duration.html
const GIGASECOND: Duration = Duration::seconds(1_000_000_000);

// Returns a DateTime one billion seconds after start.
pub fn after(start: DateTime) -> DateTime {
    start + GIGASECOND
}
